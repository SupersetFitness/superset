import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUp from "./pages/SignUp";
import WelcomeUser from "./pages/WelcomeUser";
import UserProfile from "./pages/UserProfile";
import BookTrainer from "./pages/BookTrainer";
import Available from "./pages/Available";
import TrainersNearYou from "./pages/TrainersNearYou";
import NewBooking from "./pages/NewBooking";
import TrainersNearYou from "./pages/NoMatch";
import Footer from "./components/Footer";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Buttons} />
        <Route exact path="/SignUp" component={SignUp} />
        <Route exact path="/WelcomeUser" component={WelcomeUser} />
        <Route exact path="/UserProfile" component={UserProfile} />
        <Route exact path="/BookTrainer" component={BookTrainer} />
        <Route exact path="/Available" component={Available} />
        <Route exact path="TrainersNearYou" component={TrainersNearYou} />
        <Route exact path="NewBooking" component={NewBooking} />
      </Switch>
    </div>
  </Router>
);

export default App;
