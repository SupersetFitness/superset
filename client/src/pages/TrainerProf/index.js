import react from 'react';
import TrainerSideNav from '../TrainerSideNav.js';

const TrainerProfile = props => {
    return (
    <div>
      <TrainerSideNav/>
      <h1>Hey, {props.username}! </h1>  
      <h3>Here are the available trainers in your area:</h3>
      <Name/>
    </div>
    )
}

export default TrainerProfile;