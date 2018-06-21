import React from "react";
import "./TrainerSideNav.css";
import SideNav, { Nav, NavIcon, NavText } from 'react-sidenav';
import Button from "../Button";

const TrainerNavbar = props => (
  <div style={{background: '#2c3e50', color: '#FFF', width: 220}}> 
  <SideNav highlightColor='#E91E63' highlightBgColor='#00bcd4' defaultSelected='sales'>       
      <Nav id='dashboard'>
          <NavIcon></NavIcon>    
          <Button> Set myself as an Active Trainer </Button>
      </Nav>
      <Nav id='sales'>
          <NavIcon></NavIcon>
          <Button> End my Session as an Active Trainer </Button>
      </Nav>
  </SideNav>
</div>
);

export default TrainerNavbar;