import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
const HeaderList = styled.div`
  border: 1px soild black;
  height: 300px;
  background-color: ${(props) => props.backgroundColor};
`;

// styled. 안되면, 없는 거는 상속해서 쓰면 됨
const StyledHeadLink = styled(Link)`
  color: red;
`;

export const Header = () => {
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/login/10" className="nav-link">
              Login
            </Link>
            <Link to="/" className="nav-link">
              Home
            </Link>
            {/* === <Nav.Link href="#home">Home</Nav.Link> */}
            {/* 위의 코드는 새로고침이 됨 그래서 바꿔줘야함  */}
            {/* href 대신 Link로 바꿔주고 className을 소문자-소문자로(ex Nav.Link => nav-link)로 바꿔 디자인을 씌울수 있음>  */}
          </Nav>
        </Container>
      </Navbar>
      <HeaderList>
        <ul>
          <li>
            <StyledHeadLink to="/">홈</StyledHeadLink>
          </li>
          <li>
            <StyledHeadLink to="/login/10">로그인</StyledHeadLink>
          </li>
        </ul>
      </HeaderList>
    </div>
  );
};
