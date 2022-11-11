import React from 'react'
import { useNavigate } from "react-router-dom"
import Lab from './pics/coachFac.jpg';
import Ball from './pics/plansFac.jpg';
import Cafe from './pics/moenyFac.jpg';

const Home = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className='p1'>
                <div id="facility">
                    <section3 class="facilities" >
                        <h1>Facilities</h1>
                        <p>As you signs the club contract you will be provided some extra-ordnary stuffs
                        </p>
                        <div class="row ">
                            <div class="facilities-col">

                                <img src={Lab} alt="this is " />
                                <h3>World Class Coach</h3>
                                <p>From <strong>10 state</strong>  belonging not only india but also from abroad we have provided extra ordinary coaches
                                </p>
                            </div>
                            <div class="facilities-col">

                                <img src={Ball} alt="this is " />
                                <h3>Workout Plans</h3>
                                <p>we have Transformed more tham 100 people from there falling stage with our world class <strong>Workout plan</strong>
                                </p>
                            </div>
                            <div class="facilities-col">

                                <img src={Cafe} alt="this is " />
                                <h3>Cheapest Plans</h3>
                                <p>we are here to <strong>not </strong>make money we are here to give you <strong>another chance</strong> to live life with joy
                                </p>
                            </div>
                        </div>
                    </section3>
                </div>
            </div>
        </>
    )

}
export default Home
