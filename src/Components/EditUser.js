import React, { Component } from 'react'

export default class EditUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id :this.props.userEditObject.id,
            name : this.props.userEditObject.name,
            tel :this.props.userEditObject.tel,
            Permission : this.props.userEditObject.Permission
        }
    }
    

    // 
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState = ({
            [name]:value
        });
    }
    render() {
        console.log(this.state);
        return (
            <form>
                <div className="card border-warning mb-3 col-12">
                    <div className="card-header">Sửa người dùng</div>
                    <div className="card-body primary">
                        <div className="form-group">
                            <input  onChange={(event)=>this.isChange(event)} defaultValue={this.props.userEditObject.name} type="text" name="name" placeholder="Tên User" className="form-control" />
                        </div>
                        <div className="form-group">
                            <input onChange={(event)=>this.isChange(event)} defaultValue={this.props.userEditObject.tel} type="text" name="tel" placeholder="Điện thoại" className="form-control" />
                        </div>
                        <div className="form-group">
                            <select onChange={(event)=>this.isChange(event)} defaultValue={this.props.userEditObject.Permission} className="custom-select" name="Permission" required>
                                <option value>Chọn quyền mặc định</option>
                                <option value={1}>Admin</option>
                                <option value={2}>Moderator</option>
                                <option value={3}>Normal</option>
                            </select>
                        </div>
                        <div className="form-group text-center">
                            <input type="reset" value="Lưu" className="btn btn-success" 
                                   onClick = {()=> this.props.changeEditUserStatus()}
                            />
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}
