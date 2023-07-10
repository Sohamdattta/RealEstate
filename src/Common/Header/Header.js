import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
const Header = () => {

  let logout = (event) => { window.localStorage.clear() 
    console.log(event);
   alert('logged out')
        }
  return (
    <div>
         <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Product</Nav.Link>
            <Nav.Link as={Link} to="/reg">Sign up</Nav.Link>
            <Nav.Link as={Link} to="/log">Sign in</Nav.Link>
            
            <button onClick={logout}>log out</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header