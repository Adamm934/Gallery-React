import React from "react";
import { Navbar, NavbarBrand } from "react-bootstrap";

const Header = ({title}) => {
  return (
    <Navbar bg = "light" variant = "light">
        <Navbar.Brand href = "/">{title}</Navbar.Brand>
    </Navbar>
  )
};

export default Header;
