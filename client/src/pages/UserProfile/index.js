import React from 'react';
import UserSideNav from '../../components/UserSideNav';
import Name from '../../components/Name';
import Example from '../../components/Jumbotron';
import Top from '../../components/Nav';
import SimpleMap from '../../components/Map/map';
import Profiles from '../../components/Profile';
import {Button} from 'reactstrap';

class UserProfile extends React.Component {
  state = {
    isClicked :false
     
  };

  handleClick = () => {
    this.setState({
      isClicked: true
    })
    console.log(this.state.isClicked);
  }

render() {
  return(
    <div>
      <Top
      editPage = {this.handleClick}
      />
      <UserSideNav/>

      <Example
        title="Hello" {...this.props.username}
        message="Here are the available trainers in your area. Select one to get started!"
     
     
        />
    

         {(this.state.isClicked) ? <Profiles/>  : null}   
      <SimpleMap/>
      <Name
        book= {<Button> Book this trainer </Button>}
      />
    </div>

  )
}
}
export default UserProfile;  