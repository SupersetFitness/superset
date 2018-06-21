import React from 'react';
import SignUp from "./pages/SignUp";
import WelcomeUser from "./pages/WelcomeUser";
import UserProfile from "./pages/UserProfile";
import BookTrainer from "./pages/BookTrainer";
import Available from "./pages/Available";
import TrainersNearYou from "./pages/TrainersNearYou";
import NewBooking from "./pages/NewBooking";
import Footer from "./components/Footer";
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Wrapper from './components/Wrapper';
import History from "./pages/History";
import TrainerProfile from "./pages/TrainerProf";

const App = () => (
  <Router>
    <div>
      <Wrapper>
      <Route exact path="/" component={WelcomeUser} />
        <Route exact path="/SignUp" component={SignUp} />
        <Route exact path="/WelcomeUser" component={WelcomeUser} />
        <Route exact path="/UserProfile" component={UserProfile} />
        <Route exact path="/TrainerProfile" component={TrainerProfile} />
        <Route exact path="/BookTrainer" component={BookTrainer} />
        <Route exact path="/Available" component={Available} />
        <Route exact path="/TrainersNearYou" component={TrainersNearYou} />
        <Route exact path="/NewBooking" component={NewBooking} />
        <Route exact path="/History" component={History} />
      </Wrapper>
    </div>
  </Router>
 
);

export default App;
