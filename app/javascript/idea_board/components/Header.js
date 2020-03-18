import React from "react";
import { Link } from "react-router-dom";
import { Navbar, NavbarBrand, Nav, Container, Button } from "reactstrap";

import { useAuth } from "../../shared/AuthManager";

const Header = () => {
  const { isAuthenticated, user, toggleLogin, logout } = useAuth();

  return (
    <Navbar light expand="md">
      <Container>
        <Nav className="mr-auto" navbar>
          <NavbarBrand tag={Link} to="/">
            Ideas
          </NavbarBrand>
        </Nav>

        {isAuthenticated ? (
          <div className="d-flex align-items-center">
            {`Hi, ${user.name}`}
            <Button color="link" onClick={logout}>
              <i>Logout</i>
            </Button>
          </div>
        ) : (
          <Button color="info" onClick={toggleLogin}>
            Login
          </Button>
        )}
      </Container>
    </Navbar>
  );
};

export default Header;
