import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import './Nav.css';



    const Top = props => {
        return (
          <div class="navbar">
            <Nav>
              <NavItem>
                <NavLink class="text" href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink class="text" href="/History">Training History</NavLink>
              </NavItem>
              <NavItem>
                <NavLink class="text" href="#">Edit Profile</NavLink>
              </NavItem>
           
            </Nav>
            <hr />
         
          </div>
        );
       
  
        
      }
    
    

export default Top;
