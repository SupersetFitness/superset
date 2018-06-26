import React, { Component } from 'react';
import SignUp from "./pages/SignUp";
import axios from "axios";
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
import handleLogin from "./pages/Login";
import createHistory from "history/createBrowserHistory"



class App extends Component {
  constructor() {
	  super()
	  this.state = {
	    loggedIn: false,
	    user: null
	  }
	  this._logout = this._logout.bind(this)
	  this._login = this._login.bind(this)
	}
	componentDidMount() {
	  axios.get('/api/auth/user').then(response => {
	    console.log(response.data)
	    if (!!response.data.user) {
	      console.log('THERE IS A USER')
	      this.setState({
	        loggedIn: true,
	        user: response.data.user
	      })
	    } else {
	      this.setState({
	        loggedIn: false,
	        user: null
	      })
	    }
	  })
	}

	_logout(event) {
	  event.preventDefault()
	  console.log('logging out')
	  axios.post('/api/auth/logout').then(response => {
	    console.log(response.data)
	    if (response.status === 200) {
	      this.setState({
	        loggedIn: false,
	        user: null
	      })
	    }
	  })
	}

	_login(username, password) {
	  axios
	    .post('/api/auth/login', {
	      username,
	      password
	    })
	    .then(response => {
	      console.log(response)
	      if (response.status === 200) {
	        // update the state
	        this.setState({
	          loggedIn: true,
	          user: response.data.user
	        })
	      }
	    })
	}






	render() {
		return (
			<div className="App">
        {/*  ROUTES */}
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
              {/* <Route exact path="/TrainersNearYou" component={TrainersNearYou} /> */}
              {/* <Route exact path="/NewBooking" component={NewBooking} /> */}
              <Route exact path="/History" component={History} />
			        <Route exact path="/Login" component={handleLogin}/>
            </Wrapper>
          </div>
        </Router>
			</div>
		)
	}
}


// const App = () => (
//   <Router>
//     <div>
//       <Wrapper>
//       <Route exact path="/" component={WelcomeUser} />
//         <Route exact path="/SignUp" component={SignUp} />
//         <Route exact path="/WelcomeUser" component={WelcomeUser} />
//         <Route exact path="/UserProfile" component={UserProfile} />
//         <Route exact path="/TrainerProfile" component={TrainerProfile} />
//         <Route exact path="/BookTrainer" component={BookTrainer} />
//         <Route exact path="/Available" component={Available} />
//         {/* <Route exact path="/TrainersNearYou" component={TrainersNearYou} /> */}
//         {/* <Route exact path="/NewBooking" component={NewBooking} /> */}
//         <Route exact path="/History" component={History} />
//       </Wrapper>
//     </div>
//   </Router>


// );

export default App;
