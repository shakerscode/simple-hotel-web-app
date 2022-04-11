import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import toast from 'react-hot-toast';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';



const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState('')
    //google login
    const [signInWithGoogle] = useSignInWithGoogle(auth);

    //git hub hook
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    const logIn = event => {
        event.preventDefault()
        signInWithEmailAndPassword(email, password)
    }

    const googleLogin = () => {
        signInWithGoogle()
            .then(() => {
                navigate('/home')
            })
            .catch((error)=>{
              toast.error('error while login')
            })
        
    }
    if (user) {
        navigate('/orders')
        toast.success('Successfully login!', { id: 'Success!' })
    }
  
    if (loading) {
        toast.success('Loading...', { id: 'Loading!' })
    } 
    
    return (
        <div className='sign-in-sec'>
            <h1>Login</h1>
            <form onSubmit={logIn}>
                <label htmlFor="email">Email</label>
                <input onBlur={(e) => setEmail(e.target.value)} type="email" placeholder='Your email' required />

                <label htmlFor="password">Password</label>
                <input onBlur={(e) => setPassword(e.target.value)} type="password" placeholder='Enter password' required />
                {/* <p>{error.message}</p> */}
                <input className='submit-btn' type="submit" value="Log In" />
                <p className='already-login'>Don't have an account? <Link to='/signup'>Sign in!</Link> </p>
            </form>
            <input onClick={googleLogin} className='login-with-google' type="submit" value="Continue with google" />
        </div>
    );
};

export default Login;