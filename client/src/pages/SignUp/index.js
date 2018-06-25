import React from 'react'; 
import {TextArea, FormBtn} from '../../components/Form';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Jumbotron, Button} from 'reactstrap';
import './SignUp.css';
import Example from '../../components/Jumbotron';

class SignUp extends React.Component {
    state = {
        firstName: "",
        lastName: "",
        username: "",
        password: "",   
        location: "",
        bio: "",
        video: "",
        trainers: []

    };

    handleInputChange = event => {
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
        
        if (!this.state.firstName || !this.state.lastName || !this.state.username || !this.state.bio || !this.state.password || !this.state.location || this.state.video) {
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
            bio: "",
            video: ""

        });
      };

      // handleOption = event => {
      //   if() {

      //   }
      // }

      render() {
        return (
            <div className="input-area">
            <React.Fragment>
             <Example
             message="Hello! Please Sign up below, and indicate whether you wish to be a trainer or trainee."
             />
              
            
              </React.Fragment>
            
              <form className="form">
              <FormGroup>
                <select value={this.state.value} onChange={this.handleInputChange} onSubmit={this.handleOption} >
                  <option value="I want to be a trainer"></option>
                  <option value="I want to be trained"></option>
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
                  value={this.state.username}
                  name="username"
                  onChange={this.handleInputChange}
                  type="text"
                  placeholder="Username"
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
                  value={this.state.location}
                  name="location"
                  onChange={this.handleInputChange}
                  type="text"
                  placeholder="Location"
                />
                </FormGroup>
                <FormGroup>
                 <input
                  value={this.state.bio}
                  name="bio"
                  onChange={this.handleInputChange}
                  type="text"
                  placeholder="Bio"
                />
                </FormGroup>
                <FormGroup>
                <input
                  value={this.state.video}
                  name="password"
                  onChange={this.handleInputChange}
                  type="video"
                  placeholder="Upload Video"
                />
                </FormGroup>
                <FormGroup>
                {/* <form action="myform.cgi">  */}
                   <input type="file" name="fileupload" id="fileupload"/> 
                    
                {/* </form> */}
                </FormGroup>




                <Button onClick={this.handleFormSubmit}>Submit</Button>
              </form>
            </div>
          );
        }

    }
    
      
      export default SignUp;