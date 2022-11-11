
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

export default function LogInUserComponent() 

{
    




  const navigate = useNavigate();
  const location = useLocation();
//   const [user, setUser] = useState([]);
//   const [srNo, setsrNo] = useState(null);
//   const [userType1, setuserType] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [usernameErr, setUsernameErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);

  function usernameHandler(e) {
      let item = e.target.value;
      setEmailId(item);

      if (item.length < 3) {
          setUsernameErr(true);
      } else {
          setUsernameErr(false);
      }

      setUsername("item");
  }

  function passwordHandler(e) {
      let item = e.target.value;
      if (item.length < 3) {
          setPasswordErr(true);
      } else {
          setPasswordErr(false);
      }
      setPassword(item);
  }

  function loginHandler(e) {
      if (password.length < 3 && username.length < 3) {
          alert("Invalid Data");
      } else if (username.length < 3) {
          alert("Invalid Email");
      } else if (password.length < 3) {
          alert("Invalid Password");
      }
      e.preventDefault();
  }

  /*------------------------------------------------------------------------*/
//   const user = JSON.parse(localStorage.getItem("user"))
  const [emailId, setEmailId] = useState("");

  const [message, setMessage] = useState("");
  const [errormsg, setErrorMsg] = useState("");
  const [isError, setError] = useState(false);
  function emailIdValidation(e) {
      const regex = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
      if (regex.test(emailId)) {
          setMessage("");
      } else if (!regex.test(emailId) && emailId !== "") {
          setMessage("Email is not valid");
      } else {
          setMessage("");
      }
  }

  function login() {
      let user = {
          emailId: emailId,
          password: password
      }
      axios.post("http://localhost:8888/login", user).then((response) => {
       
        localStorage.setItem("user",JSON.stringify(response.data))
        
        

        console.log(response.data);
        if(response.data.userType=='user'){
            console.log(true);
            navigate("/welcomeuser");
        }else if(response.data.userType=='Admin'){
            navigate("/welcomeadmin");
        }else{
            alert("You are Not have any account Plz signUp");
        navigate("/signUp");
        }
       
    }).catch((error) => {
        console.log(error);
        alert("You are Not have any account Plz signUp");
        navigate("/signUp");
  })
}


  /*------------------------------------------------------------------------*/

return (
  <div className='login'>
               <div className='p1'>
                 <br></br>
                 <div className="container">
                   <div className='row'>
                     <div className="card col-md-6 offset-md-3 offset-md-3" style={{ backgroundColor: "transparent" }}>
                       <h1 className='text-center' style={{ color: "Black" }} >LOG-IN</h1>
                       <div className='card-body'>
                    
                    
                    {location ? (
                        <div className="validation">{location.message}</div>
                    ) : null}
                    <div className="mb-1">
                    <label>Email Id:</label>
                        <input
                            className="form-control form-control-lg"
                            type="text"
                            placeholder="Enter Email"
                            value={emailId}
                            
                            onChange={usernameHandler}
                        />
                      <br/>
                        {usernameErr ? (
                            <div className="validation">Enter email with minimum 8 characters</div>
                        ) : null}
                        <div className="validation">{message}</div>
                    </div>
                    <div className="mb-1">
                    <label>Password:</label>
                        <input
                            className="form-control form-control-lg"
                            type="password"
                            placeholder="Enter Password"
                            onChange={passwordHandler}
                        />
                        <br/>
                        {passwordErr ? (
                            <div className="validation">Enter Password with minimum 3 characters</div>
                        ) : null}
                    </div>
                    <div className="mb-1">
                        <center>
                            {/* <Link to="" className="text-light"> */}
                            <button
                                // type="submit"
                                className="btn btn-success btn-lg w-75"
                                onClick={login}
                            >
                                LOGIN
                            </button>
                            {isError ? (
                                <div className="validation">{errormsg}</div>
                            ) : null}
                            {/* </Link> */}
                        </center>
                    </div>
                    <div className="text-center">
                        <Link to="/signUp" className="text-dark">
                            New to the Healthclub? Create an account
                        </Link>
                    </div>
                    {/* </form> */}
                </div>
            </div>
        </div>
        </div>
        </div>
        </div>
    );
}
