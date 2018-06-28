import React from 'react';
import UserSideNav from '../../components/UserSideNav';
import Name from '../../components/Name';
import Example from '../../components/Jumbotron';
import Top from '../../components/Nav';
import SimpleMap from '../../components/Map/map';

const UserProfile = props => (
    <div>
      <Top/>
      <UserSideNav/>
      <Example
        title="Hello" {...props.username}
        message="Here are the available trainers in your area. Select one to get started!"
     
     
        />
    

      {/* <Button>Edit Profile</Button> */}
      <SimpleMap/>
      <Name/>
    </div>

)
export default UserProfile;  