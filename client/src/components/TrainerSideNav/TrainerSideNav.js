import React from "react";
import "./TrainerSideNav.css";
import SideNav, { Nav, NavIcon, NavText } from 'react-sidenav';

const TrainerNavbar = props => (
  <div style={{background: '#2c3e50', color: '#FFF', width: 220}}> 
  <SideNav highlightColor='#E91E63' highlightBgColor='#00bcd4' defaultSelected='sales'>       
      <Nav id='dashboard'>
          <NavIcon><SvgIcon size={20} icon={ic_aspect_ratio}/></NavIcon>    
          <NavText> Set myself as an Active Trainer </NavText>
      </Nav>
      <Nav id='sales'>
          <NavIcon><SvgIcon size={20} icon={ic_business}/></NavIcon>
          <NavText> End my Session as an Active Trainer </NavText>
      </Nav>
  </SideNav>
</div>
);

export default TrainerNavbar;
