import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
// import Button from '../../components/Button';
import "./Jumbotron.css";

const Example = (props) => {
  return (
    
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
      </Jumbotron>
    
  );
};

export default Example;