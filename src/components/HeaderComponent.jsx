import React, { Component } from 'react'
import { Link, useNavigate } from "react-router-dom"
import AddToCart from './AddToCart';
import SignUpUserComponent from './SignUpUserComponent';

const HeaderComponent = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user)

  function signOut(){
    alert("SignOut SuccessFull");
    localStorage.clear();
    
    navigate("/");
  }
  function AddToCart(){

    navigate("/addtocart");
  }

  function selector(){
    if(user.userType=='user'){
      console.log(true);
      navigate("/welcomeuser");
  }else if(user.userType=='Admin'){
      navigate("/welcomeadmin");
  }
 
  }
  return (
    <div>
      <div className='p1'>
        <header>

          <nav className="navbar navbar-expand-md navbar-dark bg-dark">

            <Link to="/" className='navbar-brand' style={{ marginLeft: "10px" }}>HealthClub System Management App</Link>
            <div class="nav-links">
              <ul>
              

                <li><a onClick={() => selector()} >Home</a></li>

                <li><a onClick={() => navigate("/facilities")} >Facilities</a></li>
                <li><a onClick={() => navigate("/contact")} >Contact Us</a></li>

                {
                  user != null && user != ""?(<><li><a href="">{user.firstName}</a></li><li><a onClick={() => AddToCart()} > Cart</a></li><li><a onClick={() => signOut()} > LogOut</a></li></>):(<><li><a onClick={() => navigate("/signUp")} >Sign Up</a></li>
                  <li><a onClick={() => navigate("/LogIn")} > Log in</a></li></>)
                }


              </ul>
            </div>

          </nav>

         

        </header>
      </div>
    </div>
  )
}

export default HeaderComponent
