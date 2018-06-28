import React from 'react';
import InlineEdit from 'react-edit-inline';

class Profile extends React.Component {
 
    constructor(props){
      super(props);
      this.dataChanged = this.dataChanged.bind(this);
      this.state = {
        message: 'Profile'
      }
    }
 
    dataChanged(data) {
     
        console.log(data)
        this.setState({...data})
    }
 
    customValidateText(text) {
      return (text.length > 0 && text.length < 64);
    }
 
    render() {
        return (<div>
            <h2>{this.state.message}</h2>
            <span>Edit Your Profile: </span>
            <InlineEdit
              validate={this.customValidateText}
              activeClassName="editing"
              text={this.state.message}
              paramName="message"
              change={this.dataChanged}
              style={{
                backgroundColor: 'yellow',
                minWidth: 150,
                display: 'inline-block',
                margin: 0,
                padding: 0,
                fontSize: 15,
                outline: 0,
                border: 0
              }}
            />
        </div>)
    }
}

export default Profile;