import React from 'react'; 
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Jumbotron, Button} from 'reactstrap';
import './SignUp.css';
import Example from '../../components/Jumbotron';
import axios from 'axios';
import Paypal from '../../components/Paypal/paypal'

class SignUp extends React.Component {
    state = {
        firstName: "",
        lastName: "",
        password: "",   
        address: "",
        email: "",
        password: "",
        video: "",
        option: "I want to be trained",
        message: "Please sign up below, and indicate whether you wish to be a trainer or trainee."
    };

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


  handleFormSubmit = event => {
      // Preventing the default behavior of the form submit (which is to refresh the page)
      event.preventDefault();
      
      if (!this.state.firstName || !this.state.lastName || !this.state.email || !this.state.password) {
        alert("Please fill out all of the required fields.");
      } else if (this.state.password.length < 6) {
        alert(
          `Choose a more secure password ${this.state.firstName} ${this.state
            .lastName}`
        );
      } else {
        alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
      }
  
      this.setState({
          firstName: "",
          lastName: "",
          username: "",
          password: "",   
          location: "",
          option: "",
          video: ""

      });
    };

  handleOption = event => {
    console.log(event.target.value);
    if(event.target.value ==   "I want to be a trainer") {
      this.setState({
        option: "I want to be a trainer",
        message: "",
        trainerMessage: "In order to be a trainer, please upload a video to show your style of training. Be creative!"
      })
    } else {
      this.setState({
        option: "I want to be trained",
        message: "Please sign up below, and indicate whether you wish to be a trainer or trainee.",
        trainerMessage: ""
      })
    }
    }

  handlePage = (event) => {
    event.preventDefault();
    axios.post('/api/auth/signup', {
        email: this.state.email,
        password: this.state.password,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        address: this.state.address,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    this.state.option=="I want to be a trainer" 
    ? this.props.history.push("/TrainerProfile") 
      : this.props.history.push("/UserProfile")  
      console.log(this.value);
    }

  render() {
    return (
        <div className="input-area">
        <React.Fragment>
          <section class="snow-bg"></section>
          <Example
          title="SuperSet Fitness"
          trainerMessage= {this.state.trainerMessage}
          message={this.state.message}
          />
          
        
          </React.Fragment>

          
        
          <form className="form">
          <FormGroup>
            <select value={this.state.value} onChange={this.handleOption}  >
              <option value="I want to be a trainer">I want to be a trainer</option>
              <option value="I want to be trained" selected>I want to be trained</option>
            </select>
            </FormGroup>
          
          <FormGroup>
            <input
              value={this.state.firstName}
              name="firstName"
              onChange={this.handleInputChange}
              type="text"
              placeholder="First Name"
            />
          </FormGroup>

          <FormGroup>
            <input
              value={this.state.lastName}
              name="lastName"
              onChange={this.handleInputChange}
              type="text"
              placeholder="Last Name"
            />
          </FormGroup>              
      
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
              type="password"
              placeholder="Password"
            />
            </FormGroup>
            <FormGroup>
            <input
              value={this.state.address}
              name="address"
              onChange={this.handleInputChange}
              type="text"
              placeholder="Address"
            />
            </FormGroup>
            <Paypal />
        
          {this.state.option=="I want to be a trainer" ?    <FormGroup>
            
            <input type="file" name="fileupload" id="fileupload"/> 
      
        </FormGroup> : null }
            <FormGroup>
              <Button onClick={this.handlePage} >Submit</Button>
            </FormGroup>
            <FormGroup><Button a href="/">Go Back</Button></FormGroup>
          </form>
        </div>
      );
    }
  }
     
      export default SignUp;