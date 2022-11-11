import React, { Component, useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import CoachService from '../services/CoachService';
import axios from "axios";

function DeleteCoachComponent() {

  const [coach, setCoach] = useState([])
  const [coachId, setCoachId] = useState("")

  const [firstName, setfirstName] = useState("");

  const [lastName, setlastName] = useState("");
  const [exprienceInYears, setexprienceInYears] = useState("");
  const [totalTransformations, settotalTransformations] = useState("");
  const [certification, setcertification] = useState("");
  useEffect(() => {
    getCoaches();
  }, [])
  function getCoaches() {
    fetch("http://localhost:8888/diplayCoach").then((result) => {
      result.json().then((Response) => {
        // console.warn(resp)
        setCoach(Response)
        setCoachId(Response[0].coachId)
        setfirstName(Response[0].firstName)
        setlastName(Response[0].lastName)
        setexprienceInYears(Response[0].exprienceInYears)
        settotalTransformations(Response[0].totalTransformations)
        setcertification(Response[0].certification)


      })
    })
  }


  const delCoach = () => {

    const body = {
      coachId

    }

    // url to call the api 
    const url = `http://localhost:8888/deletecoach/${coachId}`

    // http method: post 
    // body: contains the data to be sent to the API 

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
                  <h1 className='text-center'>Delete Coach</h1>
                  <div className='card-body'>
                    <form>
                      <div className='form-group'>
                        <label>Coach Id:</label>
                        <input type="text" className="form-control" onChange={(e) => setCoachId(e.target.value)} placeholder="Enter ID to delete a user" />
                      </div>
                      <div style={{ textAlign: "center" }}>
                        <br></br>
                        <button button className="btn btn-danger" style={{ marginLeft: "10px" }} onClick={delCoach}>Delete Coach<i class="fa fa-pencil-square" style={{ marginLeft: "7px" }} aria-hidden="true"></i></button>
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
            <h2 className='text-center' style={{ color: "black" }}><strong><div style={{ border: "2px solid black", width: "15%", textAlign: "center", marginLeft: "42.5%", marginTop: "4px" }}>CoachList</div></strong></h2>

            <div className="row">

              <table className="table table-sm table-dark" style={{ width: "90%", marginLeft: "70px" }}>
                <thead>
                  <tr>
                    <th>Sr No:</th>
                    <th>First Name:</th>
                    <th>Last Name:</th>
                    <th>Exprience:</th>
                    <th>Total Transformations:</th>
                    <th>Eertification:</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    coach.map(
                      coach =>
                        <tr key={coach.srNo}>
                          <td>{coach.coachId}</td>
                          <td>{coach.firstName}</td>
                          <td>{coach.lastName}</td>
                          <td>{coach.exprienceInYears}</td>
                          <td>{coach.certification}</td>
                          <td>{coach.totalTransformations}</td>
                          {/* <td><button onClick={() => deleteUser(coach.coachId)}>Delete</button></td>*/}


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
export default DeleteCoachComponent;