import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';

// Replace the Menu items with the "Link" component from the react-router-dom.
// The Link component provides declarative, accessible navigation around your application.
// Syntax: <Link to="/red" href="/red">Red</Link>

class MainMenu extends React.Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            Home
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="#">
            Red
          </NavItem>
          <NavItem eventKey={2} href="#">
            Blue
          </NavItem>
          <NavItem eventKey={2} href="#">
            Others
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default MainMenu;
