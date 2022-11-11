
import React, { Component } from 'react'
import CoachService from '../services/CoachService'
import { Link, useNavigate } from "react-router-dom"

class ListCoach extends Component {

  constructor(props) {
    super(props)
    this.state = {
      coaches: []

    }
  }

  componentDidMount() {
    CoachService.getCoaches().then((res) => {
      this.setState({ coaches: res.data });
    });
  }
  render() {
    return (
      <div className='coachlist'>
        <div className='p1'>
          <h2 className='text-center' style={{ color: "white", backgroundColor: "transparent", width: "15%", textAlign: "center", marginLeft: "42.5%" }}><strong><div style={{ border: "2px solid black" }}>Coach List</div></strong></h2>
         
          <div className="row">
            <table className="table table-sm table-dark" style={{ width: "90%", marginLeft: "70px" }}>
              <thead>
                <tr>
                  <th>SrNo</th>
                  <th>Coach First Name</th>
                  <th>Coach Last Name</th>
                  <th>Experience in Years</th>
                  <th>Certification</th>
                  <th>Total Transformation </th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {
                  this.state.coaches.map(
                    coach =>
                      <tr key={coach.coachId}>
                        <td>{coach.coachId}</td>
                        <td>{coach.firstName}</td>
                        <td>{coach.lastName}</td>
                        <td>{coach.exprienceInYears}</td>
                        <td>{coach.certification}</td>
                        <td>{coach.totalTransformations}</td>
                        <td>{<Link to="/LogIn" ><button className="btn btn-success">Select</button></Link>}</td>
                        
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
export default ListCoach