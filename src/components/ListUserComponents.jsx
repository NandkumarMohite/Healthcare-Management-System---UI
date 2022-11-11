import React, { Component } from 'react'
import UserService from '../services/UserService'
import { Link, useNavigate } from "react-router-dom"


class ListUserComponents extends Component {

    constructor(props) {
        super(props)
        this.state = {
            user: []

        }


    }
    componentDidMount() {
        UserService.getUser().then((res) => {
            this.setState({ user: res.data });
        });
    }


    render() {
        return (



            <div className='userlist'>
                <div className='p1'>
                    <h2 className='text-center' style={{ color: "black", backgroundColor: "white", width: "15%", textAlign: "center", marginLeft: "42.5%" }}><strong><div style={{ border: "2px solid black" }}>User List</div></strong></h2>
                    <td><Link to="/UpdateUser" ><button className="btn btn-success" style={{ marginLeft: "52px", marginBottom: "20px" }}>Update</button></Link></td>
                    <td><Link to="/deleteuser"><button className="btn btn-danger" style={{ marginLeft: "10px", marginBottom: "20px" }}>Delete</button></Link> </td>
                    <div className="row">

                        <table className="table table-sm table-dark" style={{ width: "90%", marginLeft: "70px" }}>
                            <thead>
                                <tr>
                                    <th>SrNo</th>
                                    <th>User First Name</th>
                                    <th>User Last Name</th>
                                    <th>User Email id</th>
                                    <th>User Mobile Number</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.user.map(
                                        user =>
                                            <tr key={user.id}>
                                                <td>{user.srNo}</td>
                                                <td>{user.firstName}</td>
                                                <td>{user.lastName}</td>
                                                <td>{user.emailId}</td>
                                                <td>{user.mobileNumber}</td>


                                            </tr>
                                    )
                                }
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>

        )
    }
}

export default ListUserComponents