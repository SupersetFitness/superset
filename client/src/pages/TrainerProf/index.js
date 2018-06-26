import React from 'react';
import TrainerSideNav from '../../components/TrainerSideNav';
import Name from '../../components/Name';
import './TrainerProf.css';
import {Button, FormGroup } from 'reactstrap';
import Example from '../../components/Jumbotron';
import Top from '../../components/Nav';

const TrainerProfile = props => {
    return (
    <div>
      <Top/>
      <TrainerSideNav/>
    
      <Example
      title= "SuperSet Fitness"
      subtitle="Hello, here you can find a list of training requests."
      message="Accept or decline the invitation below."

      />
      <Name/>
      <Button>Edit Profile</Button>
    </div>
    )
}

export default TrainerProfile;