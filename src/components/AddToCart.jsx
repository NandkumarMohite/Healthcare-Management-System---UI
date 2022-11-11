import React, { Component, useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import UserService from '../services/UserService';
import axios from "axios";

function AddToCart() {


    const [srNo, setsrNo] = useState(null);

    const userPlan = JSON.parse(localStorage.getItem("UserPlan"));

    const userCoach = JSON.parse(localStorage.getItem("UserCoach"));

    const user = JSON.parse(localStorage.getItem("user"));
    const userId = user.srNo;
    const userId1 = user.srNo;
    const body = {
        userId,
        userId1,
    }

    const url = `http://localhost:8888/getRobotPlan/${userId}`



    axios.get(url, body).then((response, error) => {
        localStorage.setItem("UserPlan", JSON.stringify(response.data))

        console.log(response)


    })



    const url1 = `http://localhost:8888/getRobotCoach/${userId1}`

    axios.get(url1, body).then((response, error) => {
        localStorage.setItem("UserCoach", JSON.stringify(response.data)) 

        console.log(response)


    })

    return (

        <>
           
             <div className='p1' >
            <div id="speciality">
                <section1 class="Specility">
                    <h1>Cart Details</h1>
                    <p>Make A Playment And Take The coach And Plan And Enjoy
                        
                    </p>
                    <a style={{fontSize:"15px", borderRadius:"10px",borderColor:"Red",color:"red"}}>If Not Added To Cart Please Refresh The Page</a>

                    <div className="row ">
                        <div class="course-col ">
                            <h3 style={{fontSize:"40px", color: "Red"}}>User Information </h3>

                            <p3>
                               <a style={{fontSize:"25px"}}>User Name: {userPlan.userFirstName}</a><a style={{fontSize:"25px",marginLeft:"10px"}}>{userPlan.userlastName}</a>

                                <td><a style={{fontSize:"25px"}}>Email Id: {userPlan.usserMailId}</a></td>
                            </p3>

                        </div>
                        <div className="course-col ">
                            <h3 style={{fontSize:"40px", color: "Red"}}>Hired Coach</h3>
                            
                    
                            <p3>
                               <a style={{fontSize:"25px"}}>Name:{userCoach.coachFirstName}</a><a style={{fontSize:"25px",marginLeft:"10px"}}>{userCoach.coachLastName}</a>
                              
                                <td><a style={{fontSize:"25px"}}>Experience : {userCoach.exprienceInYears} Years</a></td>
                            </p3>
                            



                        </div>

                        <div className="course-col ">
                            <h3 style={{fontSize:"40px", color: "Red"}}>Selected Plan</h3>
                         
    
                            <p3>
                               <a style={{fontSize:"25px"}}>Plan :{userPlan.uplanType}</a>
                              <b style={{fontSize:"25px",marginLeft:"20px"}}>Duration: {userPlan.uduration}</b>

                                <td><a style={{fontSize:"25px"}}>Plan Fee: {userPlan.ufee}</a></td>
                            </p3>
                        </div>


                    </div>
                </section1>
            </div>

            </div>


        </>

    )
}
export default AddToCart;