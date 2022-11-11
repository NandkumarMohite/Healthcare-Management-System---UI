
import React, { Component } from 'react'
import PlanService from '../services/PlanService'
import { Link, useNavigate } from "react-router-dom"

class ListPlan extends Component {

  constructor(props) {
    super(props)
    this.state = {
      plan: []

    }
  }

  componentDidMount() {
    PlanService.getPlan().then((res) => {

      
      this.setState({ plan: res.data });
    });
  }
  render() {
    return (
      <div className='planlist'>
        <div className='p1'>
          <h2 className='text-center' style={{ color: "white", backgroundColor: "transparent", width: "15%", textAlign: "center", marginLeft: "42.5%" }}><strong><div style={{ border: "2px solid black" }}>Plan List</div></strong></h2>
         

          <div className="row">
            <table className="table table-sm table-dark" style={{ width: "90%", marginLeft: "70px" }}>
              <thead>
                <tr>

                  <th>SrNo</th>
                  <th>Plan Type</th>
                  <th>Duration</th>
                  <th>Fee</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {
                  this.state.plan.map(
                    plan =>
                      <tr key={plan.planId}>
                        <td>{plan.planId}</td>
                        <td>{plan.planType}</td>
                        <td>{plan.duration}</td>
                        <td>{plan.fee}</td>
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
export default ListPlan