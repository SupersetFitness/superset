import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const Top = props => {

    return (
      <div>
        <Navbar color="faded" light>
          <NavbarBrand href="/" className="mr-auto">HOME</NavbarBrand>

            <Nav navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/WelcomeUser">GitHub</NavLink>
              </NavItem>
            </Nav>
      
        </Navbar>
      </div>
    );
  }
export default Top;