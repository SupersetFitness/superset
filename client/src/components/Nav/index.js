import React from 'react';
import {Link} from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import './Nav.css';



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
                <Link to = "/EditAccount"><NavLink> Edit Account</NavLink></Link>
              </NavItem>
           
            </Nav>
            <hr />
         
          </div>
        );
      }
    
  
export default Top;