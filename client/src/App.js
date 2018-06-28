import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignUp from "./pages/SignUp";
import HandleLogin from "./pages/Login";
import axios from "axios";
import WelcomeUser from "./pages/WelcomeUser";
import UserProfile from "./pages/UserProfile";
import Footer from "./components/Footer";
import Wrapper from './components/Wrapper';
import History from "./pages/History";
import TrainerProfile from "./pages/TrainerProf";
import createHistory from "history/createBrowserHistory"
import{Chat} from "./components/chat/index.js";
import {ChatPage} from "./components/chat/index.js";


const initialState = {
  isLoggedIn: false,
  foo: "bar"
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TYPE1':
      return state.isLoggedIn = true;
    case 'TYPE2':
      return state.isLoggedIn = false; 
    default:
      return state;
  }
}

const store = createStore(loginReducer);

console.log(store);

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
        console.log("THERE IS NOT A USER")
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

	_login(email, password) {
	  axios
	    .post('/api/auth/login', {
	      email,
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
        <Provider store={store}>
          {/*  ROUTES */}
          <Router>
            <div>
              <Wrapper>
                <Route exact path="/" component={WelcomeUser} />
                <Route exact path="/SignUp" component={SignUp} />
                <Route exact path="/WelcomeUser" component={WelcomeUser} />
                <Route exact path="/UserProfile" component={UserProfile} />
                <Route exact path="/TrainerProfile" component={TrainerProfile} />
                <Route exact path="/Chat" component={Chat} />
                {/* <Route exact path="/TrainersNearYou" component={TrainersNearYou} /> */}
                {/* <Route exact path="/NewBooking" component={NewBooking} /> */}
                <Route exact path="/Login" component={HandleLogin}/>
                <Route exact path="/History" component={History} />
              </Wrapper>
            </div>
          </Router>
        </Provider>
			</div>
		)
	}
}


export default App;
