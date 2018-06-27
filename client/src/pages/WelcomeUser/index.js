import React from 'react';
import "./WelcomeUser.css";
import Footer from "../../components/Footer";
import Example from "../../components/Jumbotron/index";
import { Jumbotron, Button, FormGroup } from 'reactstrap';
import {Link } from 'react-router-dom';



const WelcomeUser = props => {
   return (
    <React.Fragment>
     <section class="snow-bg"></section>
           
        <Example
        title= "SUPERSET FITNESS"
        message= "Making trainers more accessible than ever before."
        page="Welcome"
        />
      
              <p className="btn-group-vertical">
                <button className="btn btn-secondary" color="secondary"><Link to="/SignUp">Sign Up</Link></button>
                <button className="btn btn-secondary" color="secondary"> <Link to="/LogIn">Log In</Link></button>
                </p>

    

            <img id="instructionspic" src={require('./instructions.png')} />


  
                <img src={require("./instructions.png")}/>


         <Footer/>

    </React.Fragment>

    
   )
}


export default WelcomeUser;