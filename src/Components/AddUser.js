import React, { Component } from 'react'

export default class AddUser extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         trangThaiChinhSua: false
    //     }
    // }
    // thayDoiTrangThai = () => {
    //     this.setState({
    //         trangThaiChinhSua: !this.state.trangThaiChinhSua
    //     })
    // }
    // hienThiNut = () => {
    //     if (this.state.trangThaiChinhSua === true) {
    //         return <div className="btn btn-block btn-outline-secondary " >Đóng lại</div>;
    //     }
    //     else {
    //         return <div className="btn btn-block btn-outline-info " >Thêm mới</div>;
    //     }
    // }
    constructor(props){
        super(props);
        this.state = {
            id:"",
            name:"",
            tel:"",
            Permission:""
        }
    }
    
    // Hàn isChange để thêm mới người dùng.
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]:value
        })
        // // package to item
        var item = {}
        item.id = this.state.id;
        item.name = this.state.name;
        item.tel = this.state.tel;
        item.Permission = this.state.Permission;
        //console.log(item);
    }

    




    // Hàm kiểm tra trạng thái
    kiemTraTrangThai = () => {
        if (this.props.hienThiForm === true) {
            return (
                <form>
                <div className="card border-primary mb-3">
                    <div className="card-header">Thêm mới</div>
                    <div className="card-body primary">
                        <div className="form-group">
                            <input type="text" name="name" onChange={(event)=> this.isChange(event)} placeholder="Tên User" className="form-control" />
                        </div>
                        <div className="form-group">
                            <input type="text" name="tel" onChange={(event)=>this.isChange(event)} placeholder="Điện thoại" className="form-control" />
                        </div>
                        <div className="form-group">
                            <select className="custom-select" onChange={(event)=>this.isChange(event)} name="Permission" required>
                                <option value>Chọn quyền mặc định</option>
                                <option value={1}>Admin</option>
                                <option value={2}>Moderator</option>
                                <option value={3}>Normal</option>
                            </select>
                        </div>
                        <div className="form-group text-center">
                            <input type="reset" value="Thêm mới" className="btn btn-success" onClick={(name,tel,Permission)=> this.props.add(this.state.name,this.state.tel,this.state.Permission)}/>
                        </div>
                    </div>
                </div>
                </form>
            )
        }
    }
    render() {
       // console.log(this.state);
        return (
            <div>
                <div className="col">

                    <div className="card text-left">

                        {this.kiemTraTrangThai()}
                    </div>
                </div>
            </div>
        )
    }
}
