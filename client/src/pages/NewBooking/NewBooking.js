import React from 'react';

const BookTrainer = props => {
    <div>
      <h1>Hey, {props.username}! </h1>  
      <h3>Ready to step it up a no</h3>
      <p> Below is your New Client!! There address and contact information has been provided</p>
      <p> {props.username} </p>
      <Card/>
      <Button/>
      <TrainerSideNav/>
      <Footer/>

    </div>

}

export default NewBooking;
