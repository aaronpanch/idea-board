import React from "react";
import { Link } from "react-router-dom";
import { Navbar, NavbarBrand, Nav, Container, Button } from "reactstrap";

import { useAuth } from "../../shared/AuthManager";

const Header = () => {
  const { isAuthenticated, user, toggleLogin } = useAuth();

  return (
    <Navbar light expand="md">
      <Container>
        <Nav className="mr-auto" navbar>
          <NavbarBrand tag={Link} to="/">
            Ideas
          </NavbarBrand>
        </Nav>

        {isAuthenticated ? (
          `Hi, ${user.name}`
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
