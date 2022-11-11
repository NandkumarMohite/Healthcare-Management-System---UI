
import React, { Component } from 'react'
import FeedbackService from '../services/FeedbackService'
import { Link, useNavigate } from "react-router-dom"
import work from './pics/work.jpg';
import addplan from './pics/addplan.jpg';
import addcoach from './pics/addcoach.jpg';
import cafeteria from './pics/cafeteria.png';
import coaches from './pics/coaches.jpg';
import carrer from './pics/carrer.jpg';
class WelcomeComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            feedback: []

        }
    }

    componentDidMount() {
        FeedbackService.getFeedback().then((res) => {
            this.setState({ feedback: res.data });
        });
    }
    render() {
        return (

            <><section class="header1">
                <div className="container">
                   <div className='row'>
                     <div className="card col-md-4 offset-md-4 offset-md-4" style={{ backgroundColor: "transparent" }}></div>

              <div class="row ">
                           
                            <div class="facilities-col3">
                                <Link to="/CoachUser">
                                <img src={coaches} alt="this is " />
                                <h3 style={{color:"black",textAlign:"center"}}><b>Coaches</b></h3>
                               </Link>
                            </div>
                            <div class="facilities-col3">
                            <Link to="/contact">
                                <img src={carrer} alt="this is " />
                                <h3 style={{color:"black",textAlign:"center"}}> <b>Career</b></h3>
                                </Link>
                            </div>
                            <div class="facilities-col3">
                            <Link to="/PlanUser">
                                <img  src={work} alt="this is " />
                                <h3 style={{color:"black",textAlign:"center"}}><b>Workout Plans</b></h3>
                                </Link>
                            </div>
                       
                            </div>
                           </div></div>
            </section>
            
                <section class="feedback">
                    <div class="row " >
                        <div class="feedback-cal">

                           
                            <div>
                                {this.state.feedback.map(
                                    feedback => <tr key={feedback.id}>

                                        <p>{feedback.yourMassage} </p>
                                        <h5>{feedback.planYouAssigned}</h5>
                                        <h3>
                                            {feedback.userName}
                                        </h3>
                                        <i class="fa fa-star "></i>
                                        <i class="fa fa-star "></i>
                                        <i class="fa fa-star "></i>
                                        <i class="fa fa-star "></i>
                                        <i class="fa fa-star-o "></i>
                                        <br></br>
                                        <br></br>
                                        
                                    </tr>

                                )}
                            </div>
                        </div>
                    </div>



                    <div className='jon'><Link to="/feedback"><button className="btn btn-danger" style={{ marginLeft: "10px" }}>Feedback</button></Link></div>


                </section></>


        )
    }
}
export default WelcomeComponent