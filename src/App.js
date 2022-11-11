import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import ListUserComponents from './components/ListUserComponents';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import SignUpUserComponent from './components/SignUpUserComponent';
import WelcomeComponent from './components/WelcomeComponent';
import ContactComponent from './components/ContactComponent';
import FeedbackComponent from './components/FeedbackComponent';
import CreatePlanComponent from './components/CreatePlanComponent';
import ListPlanComponent from './components/ListPlanComponent';
import FacilitiesComponent from './components/FacilitiesCompnent';
import ImformationComponent from './components/ImformationComponant';
import UpdateUserComponent from './components/UpdateUserComponent';

import UpdatePlanComponent from './components/UpdatePlanComponent';
import DeleteUserComponent from './components/DeleteUserComponent';
import DeletePlanComponent from './components/DeletePlanComponent';

import LogInUserComponent from './components/LogInUserComponent';
import WelcomeUserComponent from './components/WelcomeUserComponent';
import WelcomeAdminComponent from './components/WelcomeAdminComponent';

import ListPlan from './components/ListPlan';

import Coachuser from './components/Coachuser';
import Planuser from './components/Planuser';
import AddToCart from './components/AddToCart';
import DemoSignupCompnent from './components/DemoSignupCompnent';

import CreateCoachComponent from './components/CreateCoachComponent';
import UpdateCoachomponent from './components/UpdateCoachComponent';
import ListCoachComponent from './components/ListCoachComponent';
import DeleteCoachComponent from './components/DeleteCoachComponent';

function App() {


  return (
    <div>
      <Router>
        <div className="container">
          <HeaderComponent />
          <Routes>
            <Route exact path="/" element={<WelcomeComponent />} ></Route>
          
            <Route exact path="/Users" element={<ListUserComponents />} ></Route>
            <Route exact path="/signUp" element={<SignUpUserComponent />} ></Route>
            <Route exact path="/UpdateUser" element={<UpdateUserComponent />} ></Route>
            <Route exact path="/deleteuser" element={<DeleteUserComponent />} ></Route>
            <Route exact path="/LogIn" element={<LogInUserComponent />} ></Route>
            
            <Route exact path="/Plan1" element={<ListPlan />} ></Route>
            <Route exact path="/CoachUser" element={<Coachuser />} ></Route>
            <Route exact path="/PlanUser" element={<Planuser />} ></Route>
            <Route exact path="/welcomeuser" element={<WelcomeUserComponent />} ></Route>
            <Route exact path="/welcomeadmin" element={<WelcomeAdminComponent />} ></Route>
 {/* --------------------------------------------------------------------------------------------------------------------------------------------- */}
             <Route exact path="/addCoach" element={<CreateCoachComponent />} ></Route>
             <Route exact path="/updateCoach" element={<UpdateCoachomponent />} ></Route>
            <Route exact path="/coaches" element={<ListCoachComponent />} ></Route>
             <Route exact path="/deletecoach" element={<DeleteCoachComponent />} ></Route>
{/* --------------------------------------------------------------------------------------------------------------------------------------------- */}

            <Route exact path="/addPlan" element={<CreatePlanComponent />} ></Route>
            <Route exact path="/updatePlan" element={<UpdatePlanComponent />} ></Route>
            <Route exact path="/Plans" element={<ListPlanComponent />} ></Route>
            <Route exact path="/deleteplan" element={<DeletePlanComponent />} ></Route>
{/* --------------------------------------------------------------------------------------------------------------------------------------------- */}

            <Route exact path="/contact" element={<ContactComponent />} ></Route>
            <Route exact path="/feedback" element={<FeedbackComponent />} ></Route>
            <Route exact path="/facilities" element={<FacilitiesComponent />} ></Route>
            <Route exact path="/contact/imf" element={<ImformationComponent />} ></Route>

{/* ----------------------------------------------------------------------------------------------------------------------------------------------------- */}
            <Route exact path="/addtocart" element={<AddToCart />} ></Route>
            <Route exact path="/DemoSignup" element={<DemoSignupCompnent />} ></Route>

          </Routes>
          <FooterComponent />
        </div>
      </Router>
    </div>



  );
}

export default App;
