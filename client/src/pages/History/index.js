import React from 'react';
import Name from "../../components/Name";
import { Jumbotron, Button } from 'reactstrap';
import Example from '../../components/Jumbotron';


const History = props => {
    return(
        <div>
            <Example
            title="Training History"
            message="Here is your training history. You have the option to review each trainer below."
            />
            <Name/>
         </div>
    )
}

export default History;