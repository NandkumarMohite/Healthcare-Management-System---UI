import React, { Component } from 'react'
import PlanService from '../services/PlanService';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'


const initialState = {

    planId: '1',
    planType: '',
    duration: '',
    fee: '',
    

    erplanId: '',
    erplanType: '',
    erduration: '',
    erfee: '',
    
  

}

class CreatePlanComponent extends Component {
    constructor(props) {
        super(props)

        this.state = initialState;/*{

            //    planId:'1',

            planType: '',
            //    planId: '',
            duration: '',
            fee: ''

        }*/
        this.changePlanTypeHandler = this.changePlanTypeHandler.bind(this);
        this.changePlanIdHandler = this.changePlanIdHandler.bind(this);
        this.changeDurationHandler = this.changeDurationHandler.bind(this);
        this.changeFeeHandler = this.changeFeeHandler.bind(this);
        this.savePlan = this.savePlan.bind(this);
    }

    validate = () => {
        let erplanId = '';
        let erplanType = '';
        let erduration = '';
        let erfee = '';
        

        if (!this.state.planId) {
            erplanId = "Plan Id can't be Blank";

        }

        if (!this.state.planType) {
            erplanType = "Plan Type can't be Blank";

        }
        if (!this.state.duration) {
            erduration = "Duration can't be Blank";

        }
        if(!this.state.fee){
            erfee="Enter the Fee";
        }
        

        if (erplanId) {
            this.setState({ erplanId });
            return false;

        }
        if (erplanType) {
            this.setState({ erplanType });
            return false;

        }

        if (erduration) {
            this.setState({ erduration });
            return false;

        }
        if(erfee){
          this.setState({erfee});
          return false;

        }
        



        return true;

    };

    savePlan = (p) => {
        p.preventDefault();
        const isValid=this.validate();
        if(isValid){
        let plan = { planId: this.state.planId, planType: this.state.planType, duration: this.state.duration, fee: this.state.fee };
        console.log('plan => ' + JSON.stringify(plan));
        alert("Plan added succesfully");
        PlanService.createPlan(plan).then(Response => {
            this.setState(initialState);
        });
    }
    }
    changePlanTypeHandler = (event) => {
        this.setState({ planType: event.target.value });
    }

    changePlanIdHandler = (event) => {
        this.setState({ planId: event.target.value });
    }

    changeDurationHandler = (event) => {
        this.setState({ duration: event.target.value });
    }

    changeFeeHandler = (event) => {
        this.setState({ fee: event.target.value });
    }

    cancel() {
        this.props.History.push('/');
    }
    render() {
        return (
            <div className='planadd'>
                <div className='p1'>
                    <br></br>
                    <div className="container">
                        <div className="row">
                            <div className="card col-md-6 offset-md-3 offset-md-3" style={{ backgroundColor: "transparent" }}>
                                {/* {
                                    this.getTitle()
                                } */}
                                <h1 className="text-center" style={{ color: "white" }}>ADD PLAN</h1>
                                <div className="card-body">
                                    <form className="form-inside-input"
                                        savePlan={this.savePlan}
                                        noValidate>
                                        <div className="form-group" style={{ color: "white" }}>
                                            <label> Plan Type: </label>
                                            <input placeholder="Plan Type" name="planType" className="form-control"
                                            value={this.state.planType} onChange={this.changePlanTypeHandler} />
                                            <div style={{ fontSize: 12, color: "red" }}>
                                                 {this.state.erplanType}
                                                </div>
                                        </div>
                                        <div className="form-group" style={{ color: "white" }}>
                                            <label> Plan Id: </label>
                                            <input placeholder="Plan Id" name="planId" className="form-control"
                                                value={this.state.planId} onChange={this.changePlanIdHandler} />
                                                <div style={{ fontSize: 12, color: "red" }}>
                                                   {this.state.erplanId}
                                                </div>
                                        </div>
                                        
                                        <div className="form-group" style={{ color: "white" }}>
                                            <label> Duration: </label>
                                            <input placeholder="Duration" name="duration" className="form-control"
                                                value={this.state.duration} onChange={this.changeDurationHandler} />
                                                <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.erduration}
                                            </div>
                                        </div>
                                        <div className="form-group" style={{ color: "white" }}>
                                            <label> Fee: </label>
                                            <input placeholder="Fee" name="fee" className="form-control"
                                                value={this.state.fee} onChange={this.changeFeeHandler} />
                                                <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.erfee}
                                            </div>
                                        </div>
                                        <br></br>
                                        <button className="btn btn-success" onClick={this.savePlan}>Save</button>
                                        <Link to="/" ><button className="btn btn-danger" style={{ marginLeft: "10px" }}>Cancel</button></Link>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreatePlanComponent