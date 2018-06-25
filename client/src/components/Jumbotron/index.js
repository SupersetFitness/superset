import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
// import Button from '../../components/Button';
import "./Jumbotron.css";
import UserProfile from '../../pages/UserProfile';
import SignUp from '../../pages/SignUp';


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
                <h1 className="display-3">SuperSet</h1>
                <p className="lead"><strong>Fitness simplified.</strong></p>
                <p className="lead"><strong>{props.message}</strong></p>
                <hr className="my-2" />
     
         
                </div>
      </Jumbotron>
    
  );
};

export default Example;