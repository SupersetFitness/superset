import React from 'react';
import Name from "../../components/Name";
import { Jumbotron, Button } from 'reactstrap';
import Example from '../../components/Jumbotron';
import './History.css';
import Nav from '../../components/Nav';



const History = props => {
    return(
        <div>
            <Nav/>
            <Example
            title="Training History"
            message="Here is your training history. You have the option to review each trainer below."
            page="History"
            />
            
            <Name
            page="History"
            review="Review this trainer:"/>
            <Button a href="/">Go Home</Button>
         </div>
    )
}

export default History;