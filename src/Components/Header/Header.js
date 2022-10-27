import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { RiComputerLine,RiToggleLine } from "react-icons/ri";
import { ImSwitch } from "react-icons/im";
import { FaUser } from 'react-icons/fa';
import'./Header.css'
import { AuthContext } from '../../Context/AuthProvider';
import LiftSideNav from '../LiftSideNav/LiftSideNav';
import { Button, Image } from 'react-bootstrap';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
      logOut()
          .then(() => { })
          .catch(error => console.error(error))
  }

  // const toggole=()=>{
  //   alert('hi');
  // }
  

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
                {/* <Link className='btn' onClick={()=>toggole()}>
                 <ImSwitch></ImSwitch>
                  </Link> */}
        </div>
          </Nav>
          <Nav>
              <>
                            {
                                user?.uid ?
                                    <>
                                        <span>{user?.displayName}</span>
                                        <Button variant="light" onClick={handleLogOut}>Log out</Button>
                                    </>
                                    :
                                    <>
                                        <Link to='/login'>Login</Link>
                                        <Link to='/register'>Register</Link>
                                    </>
                            }


                        </>
                        <Link to="/">
                            {user?.photoURL ?
                                <Image
                                    style={{ height: '30px' }}
                                    roundedCircle
                                    src={user?.photoURL}>
                                </Image>
                                : <FaUser></FaUser>
                            }
                        </Link>
              
          </Nav>
        
      </Container>
      
    </Navbar>
    {/* <LiftSideNav></LiftSideNav> */}
        </div>
    );
};

export default Header;