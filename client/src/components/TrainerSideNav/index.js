import React from "react";
import "./TrainerSideNav.css";
import SideNav, { Nav, NavIcon, NavText } from 'react-sidenav';
import Button from "../Button";


 

const TrainerNavbar = props => (
  <div className="sideNav" style={{background: '#2c3e50', color: '#FFF', width: 220}}> 

        <SideNav highlightColor='#E91E63' highlightBgColor='#00bcd4' defaultSelected='sales'>       
            <Nav id='dashboard'>
            
                <NavText> Set myself as an active trainer </NavText>
            </Nav>
            <Nav id='sales'>
              
                <NavText> End my active training session </NavText>
            </Nav>
        </SideNav>
   
</div>
);

export default TrainerNavbar;