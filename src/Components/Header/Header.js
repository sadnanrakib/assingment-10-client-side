import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { RiComputerLine } from "react-icons/ri";
import'./Header.css'
import { AuthContext } from '../../Context/AuthProvider';

const Header = () => {
  const {user}= useContext(AuthContext)
    return (
        <div>
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container className='p-3'>
        <div className='header'>
        <Link to='/'><RiComputerLine></RiComputerLine> Programing Learn</Link>
        </div>
        
          <Nav className="">
        <div className='navber'>
                <Link to='/courses'>Courses</Link>
                <Link to='/blog'>Blog</Link>
                <Link to='/faq'>FAQ</Link>
        </div>
          </Nav>
          <Nav>
            <div className='logandsing'>
            <Link to='/login'>Log In</Link>
            <Link to='/singup'>Sing up</Link>
            </div>
              
          </Nav>
        
      </Container>
    </Navbar>
        </div>
    );
};

export default Header;