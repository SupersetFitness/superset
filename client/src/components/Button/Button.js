import React from "react";
import "./Button.css";

const Button = props => (
  <button
    onClick={props.handleButtonSubmit}
    className={`card-btn ${props["data-value"]}`}
    {...props}
  />
);

export default Button;