import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ColorButton = styled.nav`
  color: ${(color) => (color ? 'red' : 'black')};
`;

// 버튼 색 변경하기
const Navigation = (props) => {
  //   const { state, setState } = props;

  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          {/* <Link to="/" className="navbar-brand"> */}
          <Nav className="me-auto">
            <Link to="/" className="nav-link">
              List
            </Link>
            <Link to="/write" className="nav-link">
              Write
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
