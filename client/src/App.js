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
        <Route exact path="/SignUp" component={Books} />
        <Route exact path="/WelcomeUser" component={Detail} />
        <Route exact path="/UserProfile" component={Detail} />
        <Route exact path="/BookTrainer" component={Detail} />
        <Route exact path="/Available" component={Detail} />
        <Route exact path="TrainersNearYou" component={Detail} />
        <Route exact path="NewBooking" component={Detail} />
      </Switch>
    </div>
  </Router>
);

export default App;
