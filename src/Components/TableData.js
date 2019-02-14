import React, { Component } from 'react';
import TableDataRow from './TableDataRow';


export default class TableData extends Component {
    
    // Hàm đổ dữ liệu vào table ta dùng mapping
    mappingDataUser = () => this.props.dataUserProps.map((value,key)=>(
        <TableDataRow
        editFunClick = {(user)=> this.props.editFun(value)}
        userName = {value.name} key = {key} stt = {key} 
        telephone = {value.tel} permission = {value.Permission}
        changeEditUserStatus = {()=> this.props.changeEditUserStatus()}
        ></TableDataRow>
    ))

    render() {
        // console.log(this.props.dataUserProps);
        return (
            
                <div className="col">
                    <table className="table table-striped table-hover">
                        <thead className="thead-inverse">
                            <tr>
                                <th>STT</th>
                                <th>Tên</th>
                                <th>Điện thoại</th>
                                <th>Quyền</th>
                                <th>Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                           {this.mappingDataUser()}
                        </tbody>
                    </table>
                </div>

            
        )
    }
}
