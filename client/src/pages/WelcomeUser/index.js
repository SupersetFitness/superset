import React, { Component } from 'react';
import "./WelcomeUser.css";
import Footer from "../../components/Footer";
import Example from "../../components/Jumbotron/index";
import { Jumbotron, Button, FormGroup } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


class WelcomeUser extends React.Component {

  componentDidMount() {
    console.log("wlcmusr didMount")
    console.log(this.props.auth)
  }

  render(){
    return (
      <React.Fragment>
      <section class="snow-bg"></section>           
        <Example
        title= "SUPERSET FITNESS"
        message= "Making trainers more accessible than ever before."
        page="Welcome"
        />
      <img id="instructionspic" src={require('./instructions.png')} />
      <footer/>
      </React.Fragment>
    )
  }
}
const mapStateToProps = state => {
  return({
    auth: state 
  })
} // now your state exists as (this.props.user)



export default connect(mapStateToProps, null)(WelcomeUser);
