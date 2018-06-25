import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
// import Button from '../../components/Button';
import "./Jumbotron.css";
import UserProfile from '../../pages/UserProfile';
import SignUp from '../../pages/SignUp';
import {Link} from 'react-router-dom';




const Example = (props) => {
    
    // const readPage =(page) => {
    
    //     if(page == "UserProfile") {
    //      <div> Hello, {props.username}!
    //      </div>
    //     } else if (page== "History") {
    //      <div> Hello, {props.username}! Here is your training history: 
    //      </div>
    //     } else {
    //         <div> Hello, {props.username}! 
    //          </div>
    //     }
        
    // }

    function Greeting(props) {
        const isLoggedIn = props.isLoggedIn;
        if(isLoggedIn) {
            return <UserProfile/>
        }
            return <SignUp/>
    }
    return (
      <Jumbotron>
          <div className="area">
                <h1 className="display-3">{props.title}</h1>
                <p className="lead"><strong>{props.subtitle}</strong></p>
                <p className="lead"><strong>{props.message}</strong></p>
                <p className="lead">{props.message}</p>
                {props.page == "Welcome" ?   <p className="btn-group-vertical">
                <button className="btn btn-secondary" color="secondary"><Link to="/SignUp">Sign Up</Link></button>
                <button className="btn btn-secondary" color="secondary"> <Link to="/LogIn">Log In</Link></button>
                </p> : null}
                <hr className="my-2" />
     
         
                </div>
      </Jumbotron>
    
  );
};

export default Example;