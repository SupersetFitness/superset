import React from 'react';
import "./WelcomeUser.css";
import Footer from "../../components/Footer";
import Example from "../../components/Jumbotron";
import { Jumbotron, Button } from 'reactstrap';

const WelcomeUser = props => {
   return (
    <React.Fragment>
        <Jumbotron>
            <div className="area">
                <h1 className="display-3">SuperSet</h1>
                <p className="lead"><strong>Fitness simplified.</strong></p>
                <hr className="my-2" />
                <p><strong>Making trainers easier to access than ever before.</strong></p>

                <p className="btn-group-vertical">
                <button className="btn btn-secondary" color="secondary">Sign Up</button>
                <button className="btn btn-secondary" color="secondary">Log In</button>
                </p>
                </div>
                <img src="./instructions.png"/>
                </Jumbotron>
                {/* <div className="image">
                    <img src="./instructions.png"/>
                </div> */}
         <Footer/>
    </React.Fragment>
   )
}


export default WelcomeUser;