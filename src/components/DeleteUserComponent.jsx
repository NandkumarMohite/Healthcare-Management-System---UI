import React, { Component, useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import UserService from '../services/UserService';
import axios from "axios";

function DeleteUserComponent() {
  const [userId, setUserId] = useState("")
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
 


  const delUser = () => {

   const body = {
    userId

    }

    // url to call the api 
    const url = `http://localhost:8888/delete/${userId}`

    // http method: post 
    // body: contains the data to be sent to the API 
    alert('want To delete')
    
    axios.delete(url, body).then((response, error) => {
        
      // get the data from the response 
      // const result = response.data 
      console.log(response)
     // console.log(body)
      if (response) {
        console.log("deleted data")
      } else {
        console.log("error")
      }
    })
    // } 
  }


  return (
    
    <>
    
    <div className='deletecoach'>
        {/*   Fornt design */}
        <div className='p1' >
          <div className="container" >
            <div className='row'>
              <div className='card col-md-6 offset-md-3 offset-md-3' style={{ marginTop: "15px" }}>
                <div className="col-sm-0 offset-sm-0">
                  <h1 className='text-center'>Delete User</h1>
                  <div className='card-body'>
                    <form>
                      <div className='form-group'>
                        <label>User Id:</label>
                        <input type="text" className="form-control" onChange={(e) => setUserId(e.target.value)} placeholder="Enter ID to delete a user" />
                      </div>
                      <div style={{ textAlign: "center" }}>
                        <br></br>
                        <button button className="btn btn-danger" style={{ marginLeft: "10px" }} onClick={delUser}>Delete User<i class="fa fa-pencil-square" style={{ marginLeft: "7px" }} aria-hidden="true"></i></button>
                      </div>

                    </form>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>








    <div>
      {/* <div className="col-sm-0 offset-sm-5">
        <h2> Delete User</h2>
        <input type="text" onChange={(e) => setUserId(e.target.value)} className="from-control " placeholder="Enter ID to delete a user" /> 
        
       
        <button onClick={delUser} >Submit </button>


      </div> */}
      <div className='p1'>
      <h2 className='text-center' style={{ color: "black" }}><strong><div style={{ border: "2px solid black", width: "15%", textAlign: "center", marginLeft: "42.5%", marginTop: "4px" }}>UserList</div></strong></h2>

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
    
  );
}
export default DeleteUserComponent;