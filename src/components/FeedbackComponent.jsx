import React, { Component } from 'react'
import FeedbackService from '../services/FeedbackService';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'






class FeedbackComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {

      id: '1',

      userName: '',
      overallExprinence: '',
      planYouAssigned: '',
      yourMassage: '',


    }
    this.changeidHandler = this.changeidHandler.bind(this);
    this.changeoverallExprinenceHandler = this.changeoverallExprinenceHandler.bind(this);
    this.changeuserNameHandler = this.changeuserNameHandler.bind(this);
    this.changeplanYouAssignedHandler = this.changeplanYouAssignedHandler.bind(this);
    this.changeyourMassageHandler = this.changeyourMassageHandler.bind(this);
  }
  saveFeedback = (e) => {
    e.preventDefault();
    let feedback = { id: this.state.id, userName: this.state.userName, overallExprinence: this.state.overallExprinence, planYouAssigned: this.state.planYouAssigned, yourMassage: this.state.yourMassage }
    console.log('user=>' + JSON.stringify(feedback));

    alert("Thank for Feedback");
    FeedbackService.createFeedback(feedback).then(Response => {

    });

  }
  changeidHandler = (event) => {
    this.setState({ id: event.target.value });
  }
  changeoverallExprinenceHandler = (event) => {
    this.setState({ overallExprinence: event.target.value });
  }
  changeuserNameHandler = (event) => {
    this.setState({ userName: event.target.value });
  }
  changeplanYouAssignedHandler = (event) => {
    this.setState({ planYouAssigned: event.target.value });
  }
  changeyourMassageHandler = (event) => {
    this.setState({ yourMassage: event.target.value });
  }
  cancel(){
    
  }
  render() {
    return (
      <div>
        <div className='p1'>
          <div className="container" style={{ margintop: "500px" }}>
            <div className="row " style={{ margintop: "200px" }}>
              <div className="card col-md-6 offset-md-3 offset-md-3">
                {/* <h1 className='text-center'>SIGN-UP</h1> */}

                <h1 className='text-center'>Feedback</h1>
                <p className='text-center'>Please provide your feedback below:</p>
                <form role="form" method="post" id="reused_form">
                  <div className="row">

                  </div>
                  <div className='card-body'>

                    <form>
                      <div className='form-group'>
                        <label>SR No:</label>
                        <input placeholder="id" name="id" className="form-control"
                          value={this.state.id} onChange={this.changeidHandler} />
                      </div>
                      <div className='form-group'>
                        <label>User Name:</label>
                        <input placeholder="User Name" name="userName" className="form-control"
                          value={this.state.userName} onChange={this.changeuserNameHandler} />
                      </div>
                      <div className="col-sm-12 form-group">
                        <label>How do you rate your overall experience?</label>
                        <p>

                          <label className="radio-inline" style={{ marginLeft: "20px" }}>
                            <input type="radio" name="overallExprinence" id="radio_experience"
                              value={this.state.overallExprinence} onChange={this.changeoverallExprinenceHandler} value="Bad" />
                            Bad</label>

                          <label className="radio-inline" style={{ marginLeft: "20px" }}>
                            <input type="radio" name="overallExprinence" id="radio_experience"
                              value={this.state.overallExprinence} onChange={this.changeoverallExprinenceHandler} value="Average" />
                            Average</label>

                          <label className="radio-inline" style={{ marginLeft: "20px" }}>
                            <input type="radio" name="overallExprinence" id="radio_experience"
                              value={this.state.overallExprinence} onChange={this.changeoverallExprinenceHandler} value="Good" />
                            Good</label>
                        </p>
                      </div>



                      <div className='form-group'>
                        <label>Plan You Assigned:</label>
                        <input placeholder="plan You Assigned" name="planYouAssigned" className="form-control"
                          value={this.state.planYouAssigned} onChange={this.changeplanYouAssignedHandler} />
                      </div>
                      <div className="row">
                        <div className="col-sm-12 form-group">
                          <label for="comments">Your Massage:</label>
                          <textarea class="form-control" type="textarea" name="yourMassage" placeholder="Your Comments" className="form-control" maxlength="6000" rows="7"
                            value={this.state.yourMassage} onChange={this.changeyourMassageHandler} />

                        </div>
                      </div>

                      <button className="btn btn-success" onClick={this.saveFeedback}>Save</button>

                      {/* <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>  */}
                      <button className="btn btn-danger" onClick={this.cancel} style={{ marginLeft: "10px" }}>Cancel</button>
                    </form>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>






    )
  }
}

export default FeedbackComponent