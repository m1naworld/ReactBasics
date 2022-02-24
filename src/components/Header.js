import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Link to="/" className="navbar-brand">
            Home
          </Link>
          <Nav className="me-auto">
            <Link to="/user" className="nav-link">
              UserList
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
