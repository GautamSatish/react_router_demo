import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';

// Use Links as with the MainMenu

class MenuBar extends React.Component {
  render() {
    return (
      <Navbar>
        <Nav>
          <NavItem eventKey={2} href="#">
            <Link to="/others/yellow" href="/others/yellow">Yellow</Link>
          </NavItem>
          <NavItem eventKey={2} href="#">
            <Link to="/others/green" href="/others/green">Green</Link>
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default MenuBar;
