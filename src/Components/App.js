import React, { Component } from 'react';
import './../App.css';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import AddUser from './AddUser';
import DataUser from './Data.json';

const uuidv1 = require('uuid/v1');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hienThiForm: false,
      data: DataUser,
      searchText: '',
      editUserStatus: false,
      userEditObject: {}
    }
  }
  // Hàm sửa người dùng.
  editUser = (user) => {
    console.log("ok chưa");
    this.setState({
      userEditObject: user
    })
    console.log(user)
  }
  //
  changeEditUserStatus = () => {
    this.setState({
      editUserStatus: !this.state.editUserStatus
    })
  }
  //  Hàm thêm mới người dùng
  getNewUserData = (name,tel,Permission) => {
    //console.log("kết nối ok chưa");
    var item = {};
    item.id = uuidv1();
    item.name = name;
    item.tel = tel;
    item.Permission = Permission;
    var items = this.state.data;

    items.push(item)
    this.setState({
      data: items
    })
    console.log(items);
  }
  //
  doiTrangThai = () => {
    this.setState({
      hienThiForm: !this.state.hienThiForm
    })
  }
  // Hàm check Connect
  getTextSearch = (dl) => {
    this.setState({
      searchText: dl
    })
    console.log("du lieu bo nhan duoc la" + this.state.searchText);
  }
  //thongBao = () => {console.log("kết nối thành công");}
  render() {
    //console.log(this.state.data);
    var ketQua = []
    this.state.data.forEach((item) => {
      // So sánh với -1 khi không tìm thấy được dữ liệu
      if(item.name.indexOf(this.state.searchText) !== -1) {
        ketQua.push(item);
      }
    })
    console.log(ketQua);
    return (
      <div>
        <Header></Header>
        <div className="searchForm">
          <div className="container">
            <div className="row">
              
                <Search 
                checkConnectProps = {(dl) => this.getTextSearch(dl)}
                ketNoi = {()=>this.doiTrangThai()}  hienThiForm = {this.state.hienThiForm}
                editUserStatus = {this.state.editUserStatus}
                changeEditUserStatus = {()=> this.changeEditUserStatus()}
                userEditObject = {this.state.userEditObject}
                ></Search>
              
              
                <TableData 
                editFun = {(user)=>this.editUser(user)}
                dataUserProps={ketQua}
                editUserStatus = {this.state.editUserStatus}
                changeEditUserStatus = {()=> this.changeEditUserStatus()}
                ></TableData>
              
              
                <AddUser hienThiForm = {this.state.hienThiForm}
                         add = {(name,tel,Permission)=>{this.getNewUserData(name,tel,Permission)}}
                ></AddUser>
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
