import React from 'react';
import { Jumbotron, Button, FormGroup } from 'reactstrap';
import Example from '../../components/Jumbotron';
import axios from 'axios';
import { connect } from 'react-redux'
import { login } from '../../actions'


class HandleLogIn extends React.Component {
  state = {
    user: {},
    email: "",
    password: "",
    isLoggedIn: false
  }

  handleInputChange = event => {
    console.log(this.state);
    let value = event.target.value;
    const name = event.target.name;

    if (name === "password") {
      value = value.substring(0, 15);
    }

    this.setState({
      [name]: value,

    });

    };

  handlePage = (event) => {
    event.preventDefault();
    axios.post('/api/auth/login', {
        email: this.state.email,
        password: this.state.password,
      })
      .then((response) => {
        console.log(response.data.user);
        const userInfo = response.data;
        console.log(this.props.auth);
        this.props.login(userInfo)
        console.log(this.props.auth);
        this.props.history.push('/UserProfile')
      })
      .catch(function (error) {
        console.log(error);
      });

    }

  render() {
    return(
      <div>
        <section class="snow-bg"></section>
          <Example
            title ="SuperSet Fitness"
            message="Please enter your login credentials."
          />
          <FormGroup>
          <input
            value={this.state.email}
            name="email"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Email"
          />
          </FormGroup>
          <FormGroup>
          <input
            value={this.state.password}
            name="password"
            onChange={this.handleInputChange}
            type="text"
            placeholder="password"
          />
          </FormGroup>
          <FormGroup>
           <Button onClick={this.handlePage} >Log In</Button>
          </FormGroup>
          <FormGroup><Button a href="/">Go Back</Button></FormGroup>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return ({
    auth: state
  })
} // now your state exists as (this.props.user)



export default connect(mapStateToProps, { login })(HandleLogIn);