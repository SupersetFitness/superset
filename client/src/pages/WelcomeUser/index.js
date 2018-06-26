import React from 'react';
import "./WelcomeUser.css";
import Footer from "../../components/Footer";
import Example from "../../components/Jumbotron/index";
import { Jumbotron, Button, FormGroup } from 'reactstrap';
import {Link } from 'react-router-dom';



const WelcomeUser = props => {
   return (
    <React.Fragment>
     
           
        <Example
        title= "SuperSet Fitness"
        message= "Making trainers more accessible than ever before."
        page="Welcome"
        />
      

            
    

            <img id="instructionspic" src={require('./instructions.png')} />


         <Footer/>

    </React.Fragment>

    
   )
}


export default WelcomeUser;