import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Outlet, useNavigate } from "react-router-dom";

const AppLayout = () => {
  const token = sessionStorage.getItem("token");
  console.log(token);
  const navigate = useNavigate();
  const toLoginPage = (event) => {
    event.preventDefault();
    navigate("/login");
  };
  const logout = (event) => {
    event.preventDefault();
    sessionStorage.removeItem('token');
    navigate("/login");
  }
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">Logo</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              {token ? (
                <Nav.Link onClick={logout}>
                  Logout
                </Nav.Link>
              ) : (
                <Nav.Link onClick={toLoginPage}>
                  Login
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet /> {/* 자식 라우트의 컴포넌트가 여기에 렌더링됩니다. */}
    </>
  );
};

export default AppLayout;
