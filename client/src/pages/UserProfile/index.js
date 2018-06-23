import React from 'react';
import UserSideNav from '../../components/UserSideNav';
import Name from '../../components/Name';

const UserProfile = props => (
    <div>
      <UserSideNav/>
      <h1>Hey, {props.username}! </h1>  
      <h3>Here are the available trainers in your area:</h3>

      {/* <Button>Edit Profile</Button> */}
      <Name/>
    </div>

)
export default UserProfile;  nn