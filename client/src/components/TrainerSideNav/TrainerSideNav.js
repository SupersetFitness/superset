import React from "react";
import "./TrainerSideNav.css";
import SideNav, { Nav, NavIcon, NavText } from 'react-sidenav';
import Button from "./Button";

const TrainerNavbar = props => (
  <div style={{background: '#2c3e50', color: '#FFF', width: 220}}> 
  <SideNav highlightColor='#E91E63' highlightBgColor='#00bcd4' defaultSelected='sales'>       
      <Nav id='dashboard'>
          <NavIcon><SvgIcon size={20} icon={ic_aspect_ratio}/></NavIcon>    
          <Link to=""> Set myself as an Active Trainer </Link>
      </Nav>
      <Nav id='sales'>
          <NavIcon><SvgIcon size={20} icon={ic_business}/></NavIcon>
          <Link to=""> End my Session as an Active Trainer </Link>
      </Nav>
  </SideNav>
</div>
);

export default TrainerNavbar;
