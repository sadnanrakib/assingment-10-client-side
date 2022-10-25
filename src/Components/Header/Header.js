import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { RiComputerLine } from "react-icons/ri";
import'./Header.css'

const Header = () => {
    return (
        <div>
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home"><RiComputerLine></RiComputerLine> Programing Learn</Navbar.Brand>
        
          <Nav className="">
        <div className='navber'>
                <Link to='/courses'>Courses</Link>
                <Link to='/blog'>Blog</Link>
                <Link to='/faq'>FAQ</Link>
        </div>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Log in</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Sing up
            </Nav.Link>
          </Nav>
        
      </Container>
    </Navbar>
        </div>
    );
};

export default Header;