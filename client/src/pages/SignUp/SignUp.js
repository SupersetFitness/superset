import React from 'react'; 

class SignUp extends Components {
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

      render() {
        return (
            <div>
              <p>
                Hello {this.state.firstName} {this.state.lastName}
              </p>

            <CheckBoxes/>
              <form className="form">
                <input
                  value={this.state.firstName}
                  name="firstName"
                  onChange={this.handleInputChange}
                  type="text"
                  placeholder="First Name"
                />
                <input
                  value={this.state.lastName}
                  name="lastName"
                  onChange={this.handleInputChange}
                  type="text"
                  placeholder="Last Name"
                />
                <input
                  value={this.state.username}
                  name="username"
                  onChange={this.handleInputChange}
                  type="text"
                  placeholder="Username"
                />
                  <input
                  value={this.state.password}
                  name="password"
                  onChange={this.handleInputChange}
                  type="password"
                  placeholder="Password"
                />
                <input
                  value={this.state.location}
                  name="location"
                  onChange={this.handleInputChange}
                  type="text"
                  placeholder="Location"
                />
                 <input
                  value={this.state.bio}
                  name="bio"
                  onChange={this.handleInputChange}
                  type="text"
                  placeholder="Bio"
                />
                <input
                  value={this.state.video}
                  name="password"
                  onChange={this.handleInputChange}
                  type="video"
                  placeholder="Upload Video"
                />
                <form action="myform.cgi"> 
                    <input type="file" name="fileupload" value="fileupload" id="fileupload"/> 
                    <label for="fileupload"> Select a file to upload</label> 
                    <input type="submit" value="submit"/> 
                </form>




                <button onClick={this.handleFormSubmit}>Submit</button>
              </form>
            </div>
          );
        }

    }
    
      
      export default SignUp;