import React from "react";
import "./UserSideNav.css";
import SideNav, { Nav, NavIcon, NavText } from 'react-sidenav';
import { Button } from 'react-bootstrap';

const UserSideNav = () => (
  <div style={{background: '#2c3e50', color: '#FFF', width: 220}}> 
  <SideNav highlightColor='#E91E63' highlightBgColor='#00bcd4' defaultSelected='sales'>       
      <Nav id='train-now'>
          <NavIcon><SvgIcon size={20} icon={ic_aspect_ratio}/></NavIcon>    
          <Button onClick={}> Find a Trainer Now </Button>
      </Nav>
      <Nav id='history'>
          <NavIcon><SvgIcon size={20} icon={ic_business}/></NavIcon>
          <Button onClick={}> View Training History </Button>
      </Nav>
  </SideNav>
</div>
);

export default UserSideNav;
