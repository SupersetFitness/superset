import React from 'react';
import Name from "../../components/Name";
import { Jumbotron, Button } from 'reactstrap';


const History = props => {
    return(
        <div>
            <Jumbotron>
            <p> Hello, {props.username}! Here is your trainer history: </p>
            </Jumbotron>
            <Name/>
         </div>
    )
}

export default History;