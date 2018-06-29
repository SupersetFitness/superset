import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './Profile.css';


const Profiles = (props) => {
 
    return(
    <div>
      <h3>Account Information</h3>
    

      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Mark</th>
            <td>Otto</td>
            <td>@Bryce</td>
          
          </tr>
          </tbody>
    </table>
      
      </div>
    )
    
  }

  export default Profiles;



