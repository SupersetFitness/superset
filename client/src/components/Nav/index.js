import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import './Nav.css';
import { Link } from 'react-router-dom';



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
               <Link to="/EditProfile"> <NavLink class="text" href="#">Edit Profile</NavLink></Link>
              </NavItem>
           
            </Nav>
            <hr />
         
          </div>
        );
       
  
        
      }
    
    

export default Top;
