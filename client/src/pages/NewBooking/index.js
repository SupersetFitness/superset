import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Jumbotron } from 'reactstrap';
import Example from '../../components/Jumbotron'

const NewBooking = props => {
   return(
        
        <div>
            <Example>
            <p>Hello, {props.username}. You have a new booking!</p>
            </Example>
            <Card/>
            <Button>Accept</Button>
            <Button>Decline</Button>
            
        </div>
   )
    
}

export default NewBooking;