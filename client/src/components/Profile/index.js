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
            <th scope="col">Address</th>

          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Ryan</th>
            <td>Gosling</td>
            <td>ryan@meatman.com</td>
            <td>123 hottie lane</td>

          
          </tr>
          </tbody>
    </table>
      
      </div>
    )
    
  }

  export default Profiles;
