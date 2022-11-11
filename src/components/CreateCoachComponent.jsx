import React, { Component } from 'react'
import CoachService from '../services/CoachService';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'


const initialState = {

    coachId: '1',
    firstName: '',
    lastName: '',
    exprienceInYears: '',
    certification: '',
    totalTransformations: '',

    ercoachId: '',
    erfirstName: '',
    erlastName: '',
    erexprienceInYears: '',
    ercertification: '',
    ertotalTransformations: '',
  

}


class CreateCoachComponent extends Component {
    constructor(props) {
        super(props)

        this.state = initialState;
        this.changecoachIdHandler = this.changecoachIdHandler.bind(this);
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeExperienceInYearsHandler = this.changeExperienceInYearsHandler.bind(this);
        this.changeCertificationHandler = this.changeCertificationHandler.bind(this);
        this.changeTotalTransformationsHandler = this.changeTotalTransformationsHandler.bind(this);
        this.saveCoach = this.saveCoach.bind(this);
        this.cancel = this.cancel.bind(this);
    }

    validate = () => {
        let ercoachId = '';
        let erfirstName = '';
        let erlastName = '';
        let erexprienceInYears = '';
        let ercertification = '';
        let ertotalTransformations = '';

        if (!this.state.coachId) {
            ercoachId = "Coach Id can't be Blank";

        }

        if (!this.state.firstName) {
            erfirstName = "First Name can't be Blank";

        }
        if (!this.state.lastName) {
            erlastName = "Last Name can't be Blank";

        }
        if(!this.state.exprienceInYears){
            erexprienceInYears="Enter in years";
        }
        if(!this.state.certification){
            ercertification="certification can't be Blank";
        }
        if(!this.state.totalTransformations){
            ertotalTransformations="Enter in years";

        }

        if (ercoachId) {
            this.setState({ ercoachId });
            return false;

        }
        if (erfirstName) {
            this.setState({ erfirstName });
            return false;

        }

        if (erlastName) {
            this.setState({ erlastName });
            return false;

        }
        if(erexprienceInYears){
          this.setState({erexprienceInYears});
          return false;

        }
        if(ercertification){
            this.setState({ercertification});
            return false;

          }
          if(ertotalTransformations){
            this.setState({ertotalTransformations});
            return false;

          }



        return true;

    };

    saveCoach = (c) => {
        c.preventDefault();
        const isValid=this.validate();
        if(isValid){
        let coach = { coachId: this.state.coachId, firstName: this.state.firstName, lastName: this.state.lastName, exprienceInYears: this.state.exprienceInYears, certification: this.state.certification, totalTransformations: this.state.totalTransformations };
        console.log('coach => ' + JSON.stringify(coach));
        alert("Coach added succesfully");
        CoachService.createCoach(coach).then(Response => {
            this.setState(initialState);
        });

    }
    };
    changecoachIdHandler = (event) => {
        this.setState({ coachId: event.target.value });
    }

    changeFirstNameHandler = (event) => {
        this.setState({ firstName: event.target.value });
    }

    changeLastNameHandler = (event) => {
        this.setState({ lastName: event.target.value });
    }
    changeExperienceInYearsHandler = (event) => {
        this.setState({ exprienceInYears: event.target.value });
    }
    changeCertificationHandler = (event) => {
        this.setState({ certification: event.target.value });
    }
    changeTotalTransformationsHandler = (event) => {
        this.setState({ totalTransformations: event.target.value });
    }

    cancel() {
        this.setState(initialState);

    }
    render() {
        return (
            <div className='addcoach'>
                <div className="p1">
                    <br></br>
                    <div className="container">
                        <div className="row">
                            <div className="card col-md-6 offset-md-3 offset-md-3" style={{ backgroundColor: "transparent" }}>
                               
                                <h1 className="text-center" style={{ color: "white" }}>ADD COACH</h1>
                                <div className="card-body">
                                    <form className="form-inside-input"
                                        saveCoach={this.saveCoach}
                                        noValidate>
                                        <div className="form-group" style={{ color: "white" }}>
                                            <label> Coach ID: </label>
                                            <input placeholder="Coach Id" name="coachId" className="form-control"
                                                value={this.state.coachId} onChange={this.changecoachIdHandler} />
                                                <div style={{ fontSize: 12, color: "red" }}>
                                                   {this.state.ercoachId}
                                                </div>
                                                </div>
                                        <div className="form-group" style={{ color: "white" }}>
                                            <label> First Name: </label>
                                            <input type="text" placeholder="First Name" name="firstName" className="form-control"
                                                value={this.state.firstName} onChange={this.changeFirstNameHandler} />
                                                <div style={{ fontSize: 12, color: "red" }}>
                                                 {this.state.erfirstName}
                                                </div>
                                            </div>

                                        <div className="form-group" style={{ color: "white" }}>
                                            <label> Last Name: </label>
                                            <input placeholder="Last Name" name="lastName" className="form-control"
                                                value={this.state.lastName} onChange={this.changeLastNameHandler} />
                                            <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.erlastName}
                                            </div>
                                            </div>
                                        <div className="form-group" style={{ color: "white" }}>
                                            <label> Certification: </label>
                                            <input placeholder="Certification" name="certification" className="form-control"
                                                value={this.state.certification} onChange={this.changeCertificationHandler} />
                                            <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.ercertification}
                                            </div>
                                        </div>
                                        <div className="form-group" style={{ color: "white" }}>
                                            <label> Total Transformations: </label>
                                            <input placeholder="TotalTransformations" name="totalTransformations" className="form-control"
                                                value={this.state.totalTransformations} onChange={this.changeTotalTransformationsHandler} />
                                            <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.ertotalTransformations}
                                            </div>
                                        </div>
                                        <div className="form-group" style={{ color: "white" }}>
                                            <label> ExperienceInYears </label>
                                            <input placeholder="ExperienceInYears" name="experienceInYears" className="form-control"
                                                value={this.state.exprienceInYears} onChange={this.changeExperienceInYearsHandler} />
                                            <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.erexprienceInYears}
                                            </div>
                                        </div>
                                        <br></br>
                                        <button className="btn btn-success" onClick={this.saveCoach}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel} style={{ marginLeft: "10px" }}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div></div>
            </div>
        )
    }
}

export default CreateCoachComponent