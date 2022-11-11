import React, { Component, useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import CoachService from '../services/CoachService';
function UpdateCoachComponent() {


  const [coach, setCoach] = useState([])
  const [coachId, setCoachId] = useState('')

  const [firstName, setfirstName] = useState('');

  const [lastName, setlastName] = useState('');
  const [exprienceInYears, setexprienceInYears] = useState('');
  const [totalTransformations, settotalTransformations] = useState('');
  const [certification, setcertification] = useState('');


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


  function selectCoach(srNo) {
    console.warn(coach[srNo - 1]);
    let item = coach[srNo - 1];

    setfirstName(item.firstName)
    setlastName(item.lastName)
    setexprienceInYears(item.setexprienceInYears)
    settotalTransformations(item.settotalTransformations)
    setcertification(item.setcertification)


  }
  function updateCoach() {
    let coach = { coachId, firstName, lastName, certification, totalTransformations, exprienceInYears }
    console.log('coach=>' + JSON.stringify(coach));
    alert("Coach updated succesfully");
    CoachService.createCoach(coach).then(Response => {

    });

  }

  return (
    <>
      <div className='updateCoach'>
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
                        <label>Coach Id:</label>
                        <input placeholder="Coach Id" className="form-control" value={coachId} />
                      </div>
                      <div className='form-group'>
                        <label>First Name:</label>
                        <input placeholder="First Name" className="form-control" value={firstName} onChange={(e) => setfirstName(e.target.value)} />
                      </div>
                      <div className='form-group'>
                        <label>Last Name:</label>
                        <input placeholder="Last Name" className="form-control" value={lastName} onChange={(e) => setlastName(e.target.value)} />
                      </div>
                      <div className='form-group'>
                        <label>Certification:</label>
                        <input placeholder="Certification" className="form-control" value={certification} onChange={(e) => setcertification(e.target.value)} />
                      </div>
                      <div className='form-group'>
                        <label>Total-Transformations:</label>
                        <input placeholder="Total-Transformations" className="form-control" value={totalTransformations} onChange={(e) => settotalTransformations(e.target.value)} />
                      </div>
                      <div className='form-group'>
                        <label>Experience in Years</label>
                        <input placeholder="Experience in Yearsr" className="form-control" value={exprienceInYears} onChange={(e) => setexprienceInYears(e.target.value)} />
                      </div >
                      <div style={{ textAlign: "center" }}>
                      <br></br>
                      <button button className="btn btn-warning" style={{ marginLeft: "10px" }} onClick={updateCoach}>Update Coach<i class="fa fa-pencil-square" style={{ marginLeft: "7px" }} aria-hidden="true"></i></button>
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
                        <td><button button className="btn btn-warning" onClick={() => selectCoach(coach.coachId)}>Update <i class="fa fa-pencil-square-o" aria-hidden="true"></i></button></td>

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

export default UpdateCoachComponent

