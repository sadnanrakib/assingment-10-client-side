import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle,FaGithub, FaFacebook, FaWhatsapp, FaTwitter } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import { AuthContext } from '../../Context/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const GoogleSing = () => {
    const {providerLogin}= useContext(AuthContext);

    const googleProvider= new GoogleAuthProvider()
  

    const handleGoogleSingIn= ()=>{
        providerLogin(googleProvider)
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
        .catch(error=>console.log(error))
    }
    return (
        <div>
            <ButtonGroup vertical>
                    <Button onClick={handleGoogleSingIn} className='mb-2' variant="outline-primary"><FaGoogle></FaGoogle>Login via Google</Button>
                    <Button variant="outline-secondary"><FaGithub></FaGithub>Login via Github</Button>
            </ButtonGroup>
        </div>
    );
};

export default GoogleSing;