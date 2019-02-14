import React, { Component } from 'react'

class Header extends Component {
    render() {
        return (

            <div className="jumbotron jumbotron-fluid">
                <div className="container text-center">
                    <h2 className="display-3">Quản lý người dùng bằng ReactJS</h2>
                    <p className="lead">với dữ liệu Json</p>
                    <hr className="my-2" />
                </div>
            </div>

        )
    }
}
export default Header