import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div>
      <Navbar style={{backgroundColor:''}} className='shadow' expand="lg" >
      <Container >
        <Navbar.Brand style={{fontFamily: "Anta,sans-serif", fontWeight: "600"
                  ,fontStyle:"normal",color:'black'}} className='text-white fw-bold fs-2' href="#home">ASHWANTH C</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse  id="basic-navbar-nav">
          <Nav className='ms-auto' >
            <Nav.Link style={{fontFamily: "Anta,sans-serif", fontWeight: "600"
                  ,fontStyle:"normal",color:'black'}} className='text-white me-5' href="#about">ABOUT</Nav.Link>
            <Nav.Link style={{fontFamily: "Anta,sans-serif", fontWeight: "600"
                  ,fontStyle:"normal",color:'black'}} className='text-white me-5' href="#service">SERVICES</Nav.Link>
            <Nav.Link style={{fontFamily: "Anta,sans-serif", fontWeight: "600"
                  ,fontStyle:"normal",color:'black'}} className='text-white me-5' href="#project">PROJECTS</Nav.Link>
            <Nav.Link style={{fontFamily: "Anta,sans-serif", fontWeight: "600"
                  ,fontStyle:"normal",color:'black'}} className='text-white me-5' href="#contact">CONTACTS</Nav.Link>

          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header