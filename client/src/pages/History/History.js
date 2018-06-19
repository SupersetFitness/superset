import React from 'react';
import Name from "../../components/Name";

const History = props => {
    return (
        <div>
            <p> Hello, {props.username}! Here is your trainer history: </p>
            <Name/>
         </div>
    )
}

export default History;