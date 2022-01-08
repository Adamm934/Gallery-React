import React from "react";
import { Navbar, Container } from "react-bootstrap";

const navbarStyle = {
    backgroundColor: 'rgba(229, 213, 255, 0.3)'
};

const Headers = ({title}) => {
  return (
    <Navbar style={navbarStyle}  variant = "light">
        <Container>
            <Navbar.Brand href = "/">{title}</Navbar.Brand>
            
        </Container>
        
    </Navbar>
  )
};

export default Headers;
