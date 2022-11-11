import React, { Component, useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import UserService from '../services/UserService';
import axios from "axios";

function DeletePlanComponent() {
  const [planId, setplanId] = useState("")
  const [plan, setPlan] = useState([])
  
  const [planType, setplanType] = useState('');
  //const [planId,setplanID]=useState(null);
  const [duration, setduration] = useState('');
  const [fee, setfee] = useState('');


  useEffect(() => {
    getPlan();
  }, [])


  function getPlan() {

    fetch("http://localhost:8888/Displayplan").then((result) => {
      result.json().then((Response) => {

        setPlan(Response)
        setplanType(Response[0].planType)
        setplanId(Response[0].planId)
        setduration(Response[0].duration)
        setfee(Response[0].fee)




      })
    })


  }
 


  const delPlan = () => {

   const body = {
    planId

    }

    // url to call the api 
    const url = `http://localhost:8888/deleteplan/${planId}`

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
                  <h1 className='text-center'>Delete Plan</h1>
                  <div className='card-body'>
                    <form>
                      <div className='form-group'>
                        <label>Plan Id:</label>
                        <input type="text" className="form-control" onChange={(e) => setplanId(e.target.value)} placeholder="Enter ID to delete a user" />
                      </div>
                      <div style={{ textAlign: "center" }}>
                        <br></br>
                        <button button className="btn btn-danger" style={{ marginLeft: "10px" }} onClick={delPlan}>Delete Plan<i class="fa fa-pencil-square" style={{ marginLeft: "7px" }} aria-hidden="true"></i></button>
                      </div>

                    </form>
                  </div>
                </div>
              </div>
            </div>
</div>
</div>





<div className='p1'>
<h2 className='text-center' style={{ color: "black" }}><strong><div style={{ border: "2px solid black", width: "15%", textAlign: "center", marginLeft: "42.5%", marginTop: "4px" }}>Plan List</div></strong></h2>

            <div className="row">

              <table className="table table-sm table-dark" style={{ width: "90%", marginLeft: "70px" }}>
                <thead>
                  <tr>
                    <th>Sr No</th>
                    <th>Plan Type</th>
                    <th>Duration</th>
                    <th>Fee</th>
                   
                  </tr>
                </thead>
                <tbody>
                  {
                    plan.map(
                      plan =>
                        <tr key={plan.srNo}>
                          <td>{plan.planId}</td>
                          <td>{plan.planType}</td>
                          <td>{plan.duration}</td>
                          <td>{plan.fee}</td>

                         


                        </tr>
                    )
                  }
                </tbody>
              </table>

            </div>
          </div>
</div>
          
    </>
  );
}
export default DeletePlanComponent;