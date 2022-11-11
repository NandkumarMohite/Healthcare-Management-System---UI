import React from 'react';
import { useNavigate } from "react-router-dom"
import Banner from './pics/banner2.jpg';

const Home = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className='p1'>
                <div id="contact">
                    <div class="layer2">
                        <section class="cta ">
                            <img src={Banner} alt="this is 1" />

                            <h3>
                                For Any Query Contact Us
                            </h3>
                            <div class="a ">

                                <label className="hero-botton " onClick={() => navigate("/contact/imf")}>CONTACT US</label>

                            </div>

                        </section>
                    </div>
                </div>

            </div>

        </>
    )
};
export default Home;

