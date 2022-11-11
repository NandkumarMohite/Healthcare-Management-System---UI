import React, { Component, useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import UserService from '../services/UserService';



function UpdateUserComponent() {
  const [user, setUser] = useState([])
  const [srNo, setsrNo] = useState(null);
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [emailId, setemailId] = useState('');
  const [password, setpassword] = useState('');
  const [mobileNumber, setmobileNumber] = useState('');
  const [dateOfBirth, setdateOfBirth] = useState('');
  const [userType, setuserType] = useState('');

  useEffect(() => {
    getUser();
  }, [])


  function getUser() {

    fetch("http://localhost:8888/diplayUser").then((result) => {
      result.json().then((Response) => {

        setUser(Response)
        setsrNo(Response[0].srNo)
        setfirstName(Response[0].firstName)
        setlastName(Response[0].lastName)
        setemailId(Response[0].emailId)
        setpassword(Response[0].password)
        setmobileNumber(Response[0].mobileNumber)
        setdateOfBirth(Response[0].dateOfBirth)
        setuserType(Response[0].userType)




      })
    })


  }
  function selectUser(srNo) {

    console.warn(user[srNo - 1]);
    let item = user[srNo - 1];
    setsrNo(item.srNo)
    setfirstName(item.firstName)
    setlastName(item.lastName)
    setemailId(item.emailId)
    setpassword(item.password)
    setmobileNumber(item.mobileNumber)
    setdateOfBirth(item.dateOfBirth)
    setuserType(item.userType)


  }
  function updateUser() {
    let user = { srNo, firstName, lastName, emailId, password, mobileNumber, dateOfBirth, userType }



    console.log('user=>' + JSON.stringify(user));
    alert("User updated succesfully");
    UserService.createUser(user).then(Response => {

    });

  }



  return (
    <>
      <div className='update'>
        <div>
          <div className='p1'>
            <br></br>
            <div className="container">
              <div className='row'>
                <div className="card col-md-6 offset-md-3 offset-md-3">
                  <h1 className='text-center'>Updating Form</h1>
                  <div className='card-body'>

                    <form>
                      <div>
                        <div className='form-group'>
                          <label>First Name:</label>
                          <input placeholder="First Name" className="form-control" value={firstName} onChange={(e) => setfirstName(e.target.value)} />
                        </div>
                        <div className='form-group'>
                          <label>Last Name:</label>
                          <input placeholder="Last Name" className="form-control" value={lastName} onChange={(e) => setlastName(e.target.value)} />
                        </div>
                        <div className='form-group'>
                          <label>email-Id:</label>
                          <input placeholder="Email Id" className="form-control" value={emailId} onChange={(e) => setemailId(e.target.value)} />
                        </div>
                        <div className='form-group'>
                          <label>Password:</label>
                          <input placeholder="password" className="form-control" value={password} onChange={(e) => setpassword(e.target.value)} />
                        </div>
                        <div className='form-group'>
                          <label>Mobile Number:</label>
                          <input placeholder="Mobile Number" className="form-control" value={mobileNumber} onChange={(e) => setmobileNumber(e.target.value)} />
                        </div>
                        <div className='form-group'>
                          <label>Date Of Birth:</label>
                          <input type="date" placeholder="Date Of Birth" className="form-control" value={dateOfBirth} />
                        </div>
                        <div className='form-group'>
                          <label>Type Of User:</label>
                          <input placeholder="User Type" className="form-control" value={userType} onChange={(e) => setuserType(e.target.value)} />
                        </div>
                        <div style={{ textAlign: "center" }}>
                        <br></br>
                          <button className="btn btn-warning" onClick={updateUser}>Update User<i class="fa fa-pencil-square" style={{ marginLeft: "7px" }} aria-hidden="true"></i> </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className='p1'>
            <h2 className='text-center' style={{ color: "white" }}><strong><div style={{ border: "2px solid #ffffffe5", width: "15%", textAlign: "center", marginLeft: "42.5%", marginTop: "4px" }}>User List</div></strong></h2>

            <div className="row">

              <table className="table table-sm table-dark" style={{ width: "90%", marginLeft: "70px" }}>
                <thead>
                  <tr>
                    <th>SrNo</th>
                    <th>User First Name</th>
                    <th>User Last Name</th>
                    <th>User Email id</th>
                    <th>User Mobile Number</th>
                    <th>User Type</th>


                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    user.map(
                      user =>
                        <tr key={user.mobileNumber}>
                          <td>{user.srNo}</td>
                          <td>{user.firstName}</td>
                          <td>{user.lastName}</td>
                          <td>{user.emailId}</td>
                          <td>{user.mobileNumber}</td>
                          <td>{user.userType}</td>

                          <td >
                         
                            <button className="btn btn-warning" onClick={() => selectUser(user.srNo)}>Update <i class="fa fa-pencil-square-o" aria-hidden="true"></i></button></td>


                        </tr>
                    )
                  }
                </tbody>
              </table>

            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default UpdateUserComponent