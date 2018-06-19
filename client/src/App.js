import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
<<<<<<< HEAD
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import { Button } from 'react-bootstrap';
=======
import SignUp from "./pages/SignUp";
import WelcomeUser from "./pages/WelcomeUser";
import UserProfile from "./pages/UserProfile";
import BookTrainer from "./pages/BookTrainer";
import Available from "./pages/Available";
import TrainersNearYou from "./pages/TrainersNearYou";
import NewBooking from "./pages/NewBooking";
import TrainersNearYou from "./pages/NoMatch";
import Footer from "./components/Footer";
>>>>>>> 3d585c7270e4a6560fb2dd4c8cbd00838fceb928

const App = () => (
  <Router>
    <div>
      <Wrapper>
      <Nav />
      <Switch>
<<<<<<< HEAD
        <Route exact path="/" component={Books} />
        <Route exact path="/books" component={Books} />
        <Route exact path="/books/:id" component={Detail} />
=======
        <Route exact path="/" component={Buttons} />
        <Route exact path="/SignUp" component={SignUp} />
        <Route exact path="/WelcomeUser" component={WelcomeUser} />
        <Route exact path="/UserProfile" component={UserProfile} />
        <Route exact path="/BookTrainer" component={BookTrainer} />
        <Route exact path="/Available" component={Available} />
        <Route exact path="TrainersNearYou" component={TrainersNearYou} />
        <Route exact path="NewBooking" component={NewBooking} />
>>>>>>> 3d585c7270e4a6560fb2dd4c8cbd00838fceb928
      </Switch>
      </Wrapper>
    </div>
  </Router>
);

export default App;
