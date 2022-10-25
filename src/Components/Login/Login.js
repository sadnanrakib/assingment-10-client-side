import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import GoogleSing from '../Googlesing/GoogleSing';
import './Login.css'


const Login = () => {
    const{singIn}= useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleSubmit=(event)=>{
        event.preventDefault();
       const form = event.target;
       const email = form.email.value;
       const password = form.password.value;
       
    singIn(email,password)
    .then(result=>{
        const user = result.user;
        console.log(user);
        navigate(from,{replace:true})
        // form.reset()
    })
    .catch(error=>console.error(error));
    
    }


    return (
        <div>
                 <div className='form-container'>
            <h2 className='from-title'>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-contorl">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" required/>
                </div>
                <div className="form-contorl">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" required/>
                </div>
                <input className='btn-submit' type="submit" value="Login" />
            </form>
            <p>New to ema john <Link to='/singup'>Create a New Account</Link> </p>
        </div>
        <h3>OR</h3>
            <div>
                <GoogleSing></GoogleSing>
            </div>
        </div>
        
    );
};

export default Login;