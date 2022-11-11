import React, { Component } from 'react'
import { useNavigate } from "react-router-dom"

const FooterComponent = () => {
  const navigate = useNavigate();

  return (

    <div>
      <div className='p1'>
        <footer class="text-center text-blue" >

          <div class="container p-4 pb-0">

            <section class="">
              <p class="d-flex justify-content-center align-items-center">
                <span class="me-3">Register for free</span>

                <button className="btn btn-outline-dark btn-rounded" onClick={() => navigate("/signUp")}>SIGN UP</button>


              </p>
            </section>

          </div>

          <div class="text-center p-3" >

            <div className="footer-copyright text-center py-3">© 2022 Copyright:
              <a href="/">HealthClub.com</a>
            </div>
          </div>

        </footer>

      </div>
    </div>
  )
}

export default FooterComponent