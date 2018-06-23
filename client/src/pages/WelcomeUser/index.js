import React from 'react';
import "./WelcomeUser.css";
import Footer from "../../components/Footer";
import Example from "../../components/Jumbotron";

const WelcomeUser = props => {
   return (
    <React.Fragment>
         <Example/>
         <Footer/>
    </React.Fragment>
   )
}


export default WelcomeUser;