import React, { Component, useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import PlanService from '../services/PlanService';



function UpdatePlanComponent() {
  const [plan, setPlan] = useState([])
  const [planId, setplanId] = useState(null)
  const [planType, setplanType] = useState('');

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
  function selectPlan(srNo) {

    console.warn(plan[srNo - 1]);
    let item = plan[srNo - 1];
    setplanId(item.planId)
    setplanType(item.planType)
    setduration(item.duration)
    setfee(item.fee)



  }
  function updatePlan() {
    let plan = { planId, planType, duration, fee }



    console.log('plan=>' + JSON.stringify(plan));
    alert("Plan updated succesfully");
    PlanService.createPlan(plan).then(Response => {

    });

  }



  return (
    <>
      <div className='updateplan'>
        <div className='p1'>
          <br></br>
          <div className="container">
            <div className='row'>
              <div className="card col-md-6 offset-md-3 offset-md-3">
                <h1 className='text-center'>Updating Form</h1>
                <div className='card-body'>

                  <form>
                    <div className='form-group'>
                      <label>Sr No:</label>
                      <input placeholder="Sr No" className="form-control" value={planId} />
                    </div>
                    <div>
                      <div className='form-group'>
                        <label>Plan Type:</label>
                        <input placeholder="Plan Type" className="form-control" value={planType} onChange={(e) => setplanType(e.target.value)} />
                      </div>

                      <div className='form-group'>
                        <label>Duration:</label>
                        <input placeholder="Duration" className="form-control" value={duration} onChange={(e) => setduration(e.target.value)} />
                      </div>
                      <div className='form-group'>
                        <label>Fee:</label>
                        <input placeholder="Fee" className="form-control" value={fee} onChange={(e) => setfee(e.target.value)} />
                      </div>
                      <div style={{ textAlign: "center" }}>
                        <br></br>
                        <button button className="btn btn-warning" style={{ marginLeft: "10px" }} onClick={updatePlan}>Update Plan<i class="fa fa-pencil-square" style={{ marginLeft: "7px" }} aria-hidden="true"></i></button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className='p1'>
            <h2 className='text-center' style={{ color: "white" }}><strong><div style={{ border: "2px solid #ffffffe5", width: "15%", textAlign: "center", marginLeft: "42.5%", marginTop: "4px" }}>Plan List</div></strong></h2>

            <div className="row">

              <table className="table table-sm table-dark" style={{ width: "90%", marginLeft: "70px" }}>
                <thead>
                  <tr>
                    <th>Sr No</th>
                    <th>Plan Type</th>
                    <th>Duration</th>
                    <th>Fee</th>
                    <th>Action</th>
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

                          <td><button className="btn btn-warning" onClick={() => selectPlan(plan.planId)}>Update <i class="fa fa-pencil-square-o" aria-hidden="true"></i></button></td>


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

export default UpdatePlanComponent