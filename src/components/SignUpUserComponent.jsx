import React, { Component } from 'react'
import { Link, useNavigate } from "react-router-dom"
import UserService from '../services/UserService'

const initialState = {

  firstName: '',
  lastName: '',
  emailId: '',
  password: '',
  mobileNumber: '',
  dateOfBirth: '',
  city: '',
  gender: '',
  nationality: '',
  userType: 'user',

  erfirstName: '',
  erlastName: '',
  eremailId: '',
  erpassword: '',
  ermobileNumber: '',
  erdateOfBirth: '',
  ercity: '',
  ergender: '',
  ernationality: '',





}
class SignUpUserComponent extends Component {

  constructor(props) {
    super(props)


    this.state = initialState;

    this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
    this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
    this.changeemailIdHandler = this.changeemailIdHandler.bind(this);
    this.changepasswordHandler = this.changepasswordHandler.bind(this);
    this.changemobileNumberHandler = this.changemobileNumberHandler.bind(this);
    this.changedateOfBirthHandler = this.changedateOfBirthHandler.bind(this);
    this.changecityHandler = this.changecityHandler.bind(this);
    this.changegenderHandler = this.changegenderHandler.bind(this);
    this.changenationalityHandler = this.changenationalityHandler.bind(this);
    this.saveUser = this.saveUser.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  validate = () => {
    let erfirstName = '';
    let erlastName = '';
    let eremailId = '';
    let erpassword = '';
    let ermobileNumber = '';
    let erdateOfBirth = '';

    if (!this.state.firstName) {
      erfirstName = "First Name can't Blank";

    }
    if (!this.state.lastName) {
      erfirstName = "Last Name can't Blank";

    }
    if (!this.state.emailId.includes('@')) {
      eremailId = 'Invalid Email';
    }

    if (erfirstName) {
      this.setState({ erfirstName });
      return false;

    }

    if (erlastName) {
      this.setState({ erlastName });
      return false;

    }
    if (eremailId) {
      this.setState({ eremailId });
      return false;

    }

    if (ermobileNumber) {
      this.setState({ ermobileNumber });
      return false;

    }


    return true;

  };
  saveUser = (e) => {
    e.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      let user = { firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId, password: this.state.password, mobileNumber: this.state.mobileNumber, dateOfBirth: this.state.dateOfBirth, city: this.state.city, gender: this.state.gender, nationality: this.state.nationality, userType: this.state.userType }
      console.log('user=>' + JSON.stringify(user));

      alert("User added succesfully");
      UserService.createUser(user).then(Response => {
        this.setState(initialState);
      });
    }



  };


  changeFirstNameHandler = (event) => {
    this.setState({ firstName: event.target.value });
  }
  changeLastNameHandler = (event) => {
    this.setState({ lastName: event.target.value });
  }
  changeemailIdHandler = (event) => {
    this.setState({ emailId: event.target.value });
  }
  changepasswordHandler = (event) => {
    this.setState({ password: event.target.value });
  }
  changemobileNumberHandler = (event) => {
    this.setState({ mobileNumber: event.target.value });
  }
  changedateOfBirthHandler = (event) => {
    this.setState({ dateOfBirth: event.target.value });
  }
  changecityHandler = (event) => {
    this.setState({ city: event.target.value });
  }
  changegenderHandler = (event) => {
    this.setState({ gender: event.target.value });
  }

  changenationalityHandler = (event) => {
    this.setState({ nationality: event.target.value });
  }
  cancel() {
    this.setState(initialState);
  }

  render() {
    return (
      <div className='signup'>
        <div className='p1'>
          <br></br>
          <div className="container">
            <div className='row'>
              <div className="card col-md-6 offset-md-3 offset-md-3" style={{ backgroundColor: "transparent" }}>
                <h1 className='text-center' style={{ color: "white" }} >SIGN-UP</h1>
                <div className='card-body'>


                  <form className="form-inside-input"
                    saveUser={this.saveUser}
                    noValidate>

                    <div className='form-group' style={{ color: "white" }}>
                      <label>First Name:</label>
                      <input type="text" placeholder="First Name" name="firstName" className="form-control"
                        value={this.state.firstName} onChange={this.changeFirstNameHandler} />
                      <div style={{ fontSize: 12, color: "red" }}>
                        {this.state.erfirstName}
                      </div>
                    </div>


                    <div className='form-group' style={{ color: "white" }}>
                      <label>Last Name:</label>
                      <input type="text" placeholder="Last Name" name="lastName" className="form-control"
                        value={this.state.lastName} onChange={this.changeLastNameHandler} />
                      <div style={{ fontSize: 12, color: "red" }}>
                        {this.state.erlastName}
                      </div>
                    </div>


                    <div className='form-group' style={{ color: "white" }}>
                      <label>emailId:</label>
                      <input type="email" placeholder="EmailId" name='emailId' className="form-control"
                        value={this.state.emailId} onChange={this.changeemailIdHandler} />
                      <div style={{ fontSize: 12, color: "red" }}>
                        {this.state.eremailId}
                      </div>
                    </div>



                    <div className="row">
                      <div className="col-sm-6" >
                        <label>Password:</label>
                        <input type="password" placeholder="Password" name="password" className="form-control"
                          value={this.state.password} onChange={this.changepasswordHandler} />
                        <div style={{ fontSize: 12, color: "red" }}>
                          {this.state.erpassword}
                        </div>
                      </div>
                      <div className="col-sm-6" >
                        <label>Password:</label>
                        <input type="password" placeholder="Re-Enter Password" name="password" className="form-control"
                          value={this.state.password} onChange={this.changepasswordHandler} />
                        <div style={{ fontSize: 12, color: "red" }}>
                          {this.state.erpassword}
                        </div>
                      </div>
                    </div>



                    <div className="row">
                      <div className="col-sm-6" >
                        <label>mobileNumber:</label>
                        <input type="mobileNumber" placeholder="Mobile Number" name="mobileNumber" className="form-control"
                          value={this.state.mobileNumber} onChange={this.changemobileNumberHandler} />
                        <div style={{ fontSize: 12, color: "red" }}>
                          {this.state.ermobileNumber}
                        </div>
                      </div>
                      <div className="col-sm-6" >
                        <label>Nationality:</label>
                        <input type="nationality" placeholder="Nationality" name="nationality" className="form-control"
                          value={this.state.nationality} onChange={this.changenationalityHandler} />

                      </div>

                    </div>




                    <div className="row">
                      <div className="col-sm-6" >
                        <label>Date of birth:</label>
                        <input type="date" placeholder="dateOfBirth" name="dateOfBirth" className="form-control"
                          value={this.state.dateOfBirth} onChange={this.changedateOfBirthHandler} />
                        <div style={{ fontSize: 12, color: "red" }}>
                          {this.state.erdateOfBirth}
                        </div>
                      </div>
                      <div className="col-sm-6" >
                        <label>City:</label>
                        <input type="name" placeholder="City Name" name="City_Name" className="form-control"
                          value={this.state.city} onChange={this.changecityHandler} />
                      </div>
                      <div className="col-sm-6" >
                      <label>Gender:</label>
                        <select name="Gender" id="Gender" className="form-control" onChange={this.changegenderHandler}>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>

                        </select>
                      </div>


                    </div>


                    <br></br>
                    <button className="btn btn-success" onClick={this.saveUser}>Save</button>


                    <button className="btn btn-danger" onClick={this.cancel} style={{ marginLeft: "10px" }}>Cancel</button>

                  </form>

                </div>
              </div>

            </div>
          </div >

        </div >
      </div >
    )
  }

}
export default SignUpUserComponent
