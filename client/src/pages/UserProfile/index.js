import React from 'react';
import UserSideNav from '../../components/UserSideNav';
import Name from '../../components/Name';
import Example from '../../components/Jumbotron';

const UserProfile = props => (
    <div>
      <UserSideNav/>
      <Example
        message = 'Hello' {...props.username}
     
     
        />
      <h3>Here are the available trainers in your area:</h3>

      {/* <Button>Edit Profile</Button> */}
      <Name/>
    </div>

)
export default UserProfile;  