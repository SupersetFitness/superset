import React from 'react';
import TrainerSideNav from '../../components/TrainerSideNav';
import Name from '../../components/Name';
import './TrainerProf.css';
import { Jumbotron, Button, FormGroup } from 'reactstrap';

const TrainerProfile = props => {
    return (
    <div>
      <TrainerSideNav/>
      <h1>Hey, {props.username}! </h1>  
      <h3>Here are the available trainers in your area:</h3>
      <Name/>
      <Button>Edit Profile</Button>
    </div>
    )
}

export default TrainerProfile;