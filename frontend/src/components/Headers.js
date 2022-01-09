import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { ReactComponent as Logo } from '../Images/Img.svg';

const navbarStyle = {
  backgroundColor: 'rgba(229, 213, 255, 0.3)',
};

const Headers = ({ title }) => {
  return (
    <Navbar style={navbarStyle} variant="light">
      <Container>
        <Logo style={{ maxWidth: '13rem', maxHeight: '2rem' }}/>
      </Container>
    </Navbar>
  );
};

export default Headers;
