import React from 'react';
import Name from "../../components/Name";

const Available = props => {
  return (
    <div className="col-lg-12 Welcome">
      <h1>Hey, {props.username}! </h1>  
      <h3>Here are the available trainers in your area:</h3>
      <Name/>
    </div>
  )

}

export default Available;
