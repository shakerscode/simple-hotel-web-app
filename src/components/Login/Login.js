import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import toast from 'react-hot-toast';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import SocialLogin from '../SocialLogin/SocialLogin';
import { Helmet } from 'react-helmet-async';



const Login = () => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState('')
    //google login
    const [signInWithGoogle] = useSignInWithGoogle(auth);


    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    //git hub hook
    const [
        signInWithEmailAndPassword,
        users,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    const logIn = event => {
        event.preventDefault()
        signInWithEmailAndPassword(email, password)
    }

    // const googleLogin = () => {
    //     signInWithGoogle()
    //         .then(() => {
    //             navigate(from, {replace: true})
    //             return
    //         })
    //         .catch((error)=>{
    //           toast.error('error while login')
    //         })
        
    // }
    if (user) {
        navigate(from, {replace: true})
        toast.success('Successfully login!', { id: 'Success!' })
    }

    return (
        <div className='sign-in-sec'>
             <Helmet>
                <title>Login - HomeSide hotel</title>
            </Helmet>
            <h1>Login</h1>
            <form onSubmit={logIn}>
                <label htmlFor="email">Email</label>
                <input onBlur={(e) => setEmail(e.target.value)} type="email" placeholder='Your email' required />
                <p className='erros-style'>{error?.message?.includes('invalid-email') && 'Invalid  email.'}</p>
                <label htmlFor="password">Password</label>
                <input onBlur={(e) => setPassword(e.target.value)} type="password" placeholder='Enter password' required />
                <p className='erros-style'>{error?.message?.includes('wrong-password') && 'Wrong password'}</p>
                <p className='erros-style'>{error?.message?.includes('internal-error') && 'Internal error. Please try again.'}</p>
                <p className='erros-style'>{error?.message?.includes('user-not-found') && 'Invalid user'}</p>
                <input className='submit-btn' type="submit" value={loading ? 'Loading' : 'Log In'} />
                <p className='already-login'>Don't have an account? <Link to='/signup'>Sign in!</Link> </p>
            </form>
            <SocialLogin></SocialLogin>
            {/* <input onClick={googleLogin} className='login-with-google' type="submit" value="Continue with google" /> */}
        </div>
    );
};

export default Login;