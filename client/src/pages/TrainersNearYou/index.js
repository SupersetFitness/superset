import React from 'react';
import './TrainersNearYou.css';
import Name from '../../components/Name';
import Example from '../../components/Jumbotron';

const TrainerNearYou = props => {
    return (
    <div>
        
        Hello, {props.username}! Here are trainers near you:
        <Name/>
    </div>
    )
}