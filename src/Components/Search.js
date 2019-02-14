import React, { Component } from 'react'
import EditUser from './EditUser'
export default class Search extends Component {
    // Hàm hiển thị nút
    hienThiNut = () => {
        if (this.props.hienThiForm === true) {
            return (<div className="btn btn-block btn-outline-secondary " onClick={() => this.props.ketNoi()} >Đóng lại</div>)
        }
        else {
            return (<div className="btn btn-block btn-outline-info " onClick={() => this.props.ketNoi()}>Thêm mới</div>)
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            tempValue: ''
        }
    }
    // Hàm lấy text của thanh search
    isChange = (event) => {
        console.log(event.target.value);
        this.setState({
            tempValue: event.target.value
        });
        this.props.checkConnectProps(this.state.tempValue);
    }
    // Hàm hiển thị form Sửa
    isShowEditForm = () => {
        if(this.props.editUserStatus === true) {
            return <EditUser 
                    userEditObject = {this.props.userEditObject}
                    changeEditUserStatus = {()=>this.props.changeEditUserStatus()}></EditUser>
        }
    }
    render() {
        return (
            <div className="col-12">
                <div className="row">
                    {this.isShowEditForm()}
                </div>
                <div className="input-group mb-3">
                    <input type="text" onChange={(event) => this.isChange(event)} className="form-control" placeholder="Nội dung cần tìm" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="button" onClick={(dl) => this.props.checkConnectProps(this.state.tempValue)}>Search</button>
                    </div>
                    {this.hienThiNut()}
                </div>
            </div>
        )
    }
}
