





import React, { Component } from 'react'

import {useNavigate} from 'react-router-dom';
import PlanService from '../services/PlanService'
import { Link, Navigate } from "react-router-dom"
import AddToCartService from '../services/AddToCartService';
const initialState={
  plan: [],
  user:[]


}


class Planuser extends Component {

  constructor(props) {


    super(props)


      this.state ={
        plan: [],
        user:[],
       count:1,

      }

  }


 settingElement()
{
  this.setState({user:JSON.parse(localStorage.getItem("user"))}) 
}

  addTocart(planType,duration,fee){
    this.setState({user:JSON.parse(localStorage.getItem("user"))}) 

    let Id=this.state.user.srNo;
    let firstName=this.state.user.firstName;
    let lastName=this.state.user.lastName;
    let emailId=this.state.user.emailId;
    let mobileNumber=this.state.user.mobileNumber;


    let userCoach = {RobotId:Id,userFirstName: firstName, userlastName: lastName, usserMailId: emailId,  userMobileNumber:mobileNumber, uplanType:planType, uduration: duration,  ufee: fee}

if(Id==null){


    alert("Are you Comfirm To take this plan Click Again The respective Plan And Clarify");



  }else{
    console.log('user=>' + JSON.stringify(userCoach));
   

    AddToCartService.AddToCartPlan(userCoach).then(Response => {

      alert("Added to cart");


    });
   
  
  }
  
  }
  
 

  componentDidMount() {
    PlanService.getPlan().then((res) => {
     

      this.setState({ plan: res.data });
    });
  }
  render()
  {

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
                        <td>{<button className="btn btn-success"><a onClick={() => this.addTocart(plan.planType,plan.duration,plan.fee)} >addTocart</a></button>}</td>
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
export default Planuser


