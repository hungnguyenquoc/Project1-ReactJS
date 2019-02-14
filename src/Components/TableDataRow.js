import React, { Component } from 'react'

export default class TableDataRow extends Component {

    permissionShow = () => {
        if(this.props.permission === 1) {
            return "Admin";
        }
        else if( this.props.permission === 2) {
            return "Moderator";
        }
        else {
            return "Normal User";
        }
    }

    editClick = () => {
        this.props.editFunClick();
        this.props.changeEditUserStatus();
    }
    render() {
        return (
            
                <tr>
                    <td >{this.props.stt+1}</td>
                    <td>{this.props.userName}</td>
                    <td>{this.props.telephone}</td>
                    <td>
                        {
                            this.permissionShow()
                        }
                    </td>
                    <td>
                        <div className="btn-group">
                            <div className="btn btn-warning sua" onClick={()=> this.editClick()}><i className="fa fa-edit"> Sửa</i></div>
                            <div className="btn btn-danger xoa"><i className="fa fa-trash"> Xóa</i></div>
                        </div>
                    </td>
                </tr>
            
        )
    }
}
