import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
// import Button from '../../components/Button';
import "./Jumbotron.css";

const Example = (props) => {
  return (
    
      <Jumbotron>
          <div className="area">
                <h1 className="display-3">SuperSet Fitness</h1>
                <p className="lead">Fitness simplified.</p>
                <hr className="my-2" />
                <p><strong>Making trainers easier to access than ever before.</strong> </p>

                <p className="lead">
                <Button color="primary">Learn More</Button>
                </p>
                </div>
      </Jumbotron>
    
  );
};

export default Example;