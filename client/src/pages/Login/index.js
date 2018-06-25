import React from 'react';
import { Jumbotron, Button, FormGroup } from 'reactstrap';
import Example from '../../components/Jumbotron';

const handleLogIn = props => {
    return(
      <div>
          <Example
            message="Please enter your login credentials."
          />
          <FormGroup>
          <input
            
            name="username"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Username"
          />
          </FormGroup>
          <FormGroup>
          <input
            
            name="password"
            onChange={this.handleInputChange}
            type="text"
            placeholder="password"
          />
          </FormGroup>
      </div>
    )
  }

  export default handleLogIn;