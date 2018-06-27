import React from 'react';
import { Jumbotron, Button, FormGroup } from 'reactstrap';
import Example from '../../components/Jumbotron';


const handleLogIn = props => {
    return(
      <div>
          <Example
            title ="SuperSet Fitness"
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
          <FormGroup>
          <Button type="submit" a href="/UserProfile">Log In</Button>
          </FormGroup>
          <FormGroup><Button a href="/">Go Back</Button></FormGroup>
      </div>
    )
  }

  export default handleLogIn;