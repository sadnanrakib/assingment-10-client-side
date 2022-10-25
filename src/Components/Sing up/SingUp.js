import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const SingUp = () => {
    const [error,setError]=useState(null);
const {createUser} = useContext(AuthContext)
    const handleSubmit=(event)=>{
        event.preventDefault();
       const form = event.target;
       const email = form.email.value;
       const password = form.password.value;
       const confirm = form.confirm.value;
       console.log(email,password,confirm);
        if(password.length < 6){
            setError("Password must be at least 6 characters long");
            return;
        }
       if(password!==confirm){
            setError('Your password Not Match ')
            return;
       }
       createUser(email,password)
       .then (result=>{
        const user = result.user;
        console.log(user);
        form.reset();
       })
       .catch(error=>console.error(error))
       

    }
    return (
        <div>
              <div className='form-container'>
            <h2 className='from-title'>Sing Up</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-contorl">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" required/>
                </div>
                <div className="form-contorl">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" required/>
                </div>
                <div className="form-contorl">
                    <label htmlFor="confirm password">Confrim Password</label>
                    <input type="password" name="confirm" id="" required/>
                </div>
                <input className='btn-submit' type="submit" value="Sing Up" />
            </form>
            <p>Already Have an Account <Link to='/login'>Login</Link> </p>
            <p className='text-error'>{error}</p>
        </div>
        </div>
    );
};

export default SingUp;