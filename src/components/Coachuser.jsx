// import React, { Component } from 'react'

// import {useNavigate} from 'react-router-dom';
// import PlanService from '../services/PlanService'
// import { Link, Navigate } from "react-router-dom"
// import AddToCartService from '../services/AddToCartService';
// import CoachService from '../services/CoachService'
// const initialState={
//   coaches: [],
//   user:[]


// }

// class Coachuser extends Component {

//   constructor(props) {
//     super(props)
//     this.state = {
//       coaches: [],
//       user:[]

//     }
//   }
//   settingElement()
//   {
//     this.setState({user:JSON.parse(localStorage.getItem("user"))}) 
//   }



//   addTocart(firstname,lastname,exp){
   
//     this.setState({user:JSON.parse(localStorage.getItem("user"))}) 

//     let Id=this.state.user.srNo;
   

// console.log(Id);
//     let user1 = {RobotIdCoach:Id,coachFirstName:firstname,coachLastName:lastname,exprienceInYears:exp}

// if(Id==null){


//     alert("Are you Comfirm To take this Coach Click Again The respective coach And Clarify");



//   }else{
//     console.log('user=>' + JSON.stringify(user1));
   
  
//     AddToCartService.AddToCartCoach(user1).then(Response => {

//       alert("Added to cart");


//     });
   
  
//   }
  
//   }
  
//   componentDidMount() {
//     CoachService.getCoaches().then((res) => {
//       this.setState({ coaches: res.data });
//     });
//   }
//   render() {
//     return (
//       <div className='coachlist'>
//         <div className='p1'>
//           <h2 className='text-center' style={{ color: "white", backgroundColor: "transparent", width: "15%", textAlign: "center", marginLeft: "42.5%" }}><strong><div style={{ border: "2px solid black" }}>Coach List</div></strong></h2>
         
//           <div className="row">
//             <table className="table table-sm table-dark" style={{ width: "90%", marginLeft: "70px" }}>
//               <thead>
//                 <tr>
//                   <th>SrNo</th>
//                   <th>Coach First Name</th>
//                   <th>Coach Last Name</th>
//                   <th>Experience in Years</th>
//                   <th>Certification</th>
//                   <th>Total Transformation </th>
//                   <th>Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {
//                   this.state.coaches.map(
//                     coach =>
//                       <tr key={coach.coachId}>
//                         <td>{coach.coachId}</td>
//                         <td>{coach.firstName}</td>
//                         <td>{coach.lastName}</td>
//                         <td>{coach.exprienceInYears}</td>
//                         <td>{coach.certification}</td>
//                         <td>{coach.totalTransformations}</td>
//                         <td>{<button className="btn btn-success"><a onClick={() => this.addTocart(coach.firstName,coach.lastName,coach.exprienceInYears)} >addTocart</a></button>}</td>
                        
//                       </tr>

//                   )
//                 }
//               </tbody>
//             </table>

//           </div>
//         </div>
//       </div>
//     )
//   }
// }
// export default Coachuser























import React, { Component } from 'react'

import {useNavigate} from 'react-router-dom';
import PlanService from '../services/PlanService'
import { Link, Navigate } from "react-router-dom"
import AddToCartService from '../services/AddToCartService';
import CoachService from '../services/CoachService'
const initialState={
  coaches: [],
  user:[]


}

class Coachuser extends Component {

  constructor(props) {
    super(props)
    this.state = {
      coaches: [],
      user:[]

    }
  }
  settingElement()
  {
    this.setState({user:JSON.parse(localStorage.getItem("user"))}) 
  }



  addTocart(firstname,lastname,exp){
    
   
    this.setState({user:JSON.parse(localStorage.getItem("user"))}) 

    let Id=this.state.user.srNo;
   

console.log(Id);
    let user1 = {RobotIdCoach:Id,coachFirstName:firstname,coachLastName:lastname,exprienceInYears:exp}

if(Id==null){


    alert("Are you Comfirm To take this Coach Click Again The respective coach And Clarify");



  }else{
    console.log('user=>' + JSON.stringify(user1));
   
  
    AddToCartService.AddToCartCoach(user1).then(Response => {

      alert("Added to cart");


    });
   
  
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
                        <td>{<button className="btn btn-success"><a onClick={() => this.addTocart(coach.firstName,coach.lastName,coach.exprienceInYears)} >addTocart</a></button>}</td>
                        
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
export default Coachuser





































