import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Jumbotron } from 'reactstrap';
import Example from '../../components/Jumbotron'

const NewBooking = props => {
   return(
        
        <div>
            <Example
            title="SuperSet Fitness"
            message= "Hello"
            username= {props.username}
           />
            
            <Card/>
            <Button>Accept</Button>
            <Button>Decline</Button>
            
        </div>
   )
    
}

export default NewBooking;