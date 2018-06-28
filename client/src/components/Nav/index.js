import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';


    const Top = props => {
        return (
          <div>
            <Nav>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/History">Training History</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Edit</NavLink>
              </NavItem>
           
            </Nav>
            <hr />
         
          </div>
        );
      }
    
  
export default Top;