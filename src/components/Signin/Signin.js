import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Signin.css';
import { useSendEmailVerification } from 'react-firebase-hooks/auth';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import SocialLogin from '../SocialLogin/SocialLogin';
import { Helmet } from 'react-helmet-async';




const Signin = () => {

    const[ agree, setAgree] = useState(false)

    const navigate = useNavigate()

    //google login
    const [signInWithGoogle, users] = useSignInWithGoogle(auth);

    //from github hooks 
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    //email verification
    const [sendEmailVerification, sending] = useSendEmailVerification(auth);


    //my code
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [errors, setErrors] = useState('');
    const [errorsTwo, setErrorsTwo] = useState('');
    const [errorsThree, setErrorsThree] = useState('');


    const getNameValue = (event) => {
        const name = event.target.value;
        setName(name);

    }
    const getEmailValue = (event) => {
        const email = event.target.value;
        setEmail(email)

    }
    const getPasswordValue = (event) => {
        const password = event.target.value;
        setPassword(password)

    }
    const getConfPassValue = (event) => {
        const confPass = event.target.value;
        setConfPassword(confPass)


    }
    const signUpBtn = event => {
        event.preventDefault()
        if (confPassword !== password) {
            setErrors("Password didn't match!")
            return;
        }
        if (password.length < 6) {
            setErrorsTwo('Password is too short. Six digit is mandatory.')
            return;
        }
        createUserWithEmailAndPassword(email, password);
        sendEmailVerification()

    }


    if (user) {
        toast.success('Registration successful!', { id: 'Done' })
        return navigate('/home');
    }
    if (error) {
        if(error?.message?.includes('email-already-in-use')){
            // setErrorsThree('Email already in use');
            toast.error('Email already in use', {id: 'error'})
            
        }
        

    }
    if (loading) {
        toast.success('Loading...', {
            id: 'Loading'
        });

    }

    //verification condition

    if (sending) {
        toast.success('Sending a verification email', { id: 'Verification email sent.' })
    }


    return (
        <div className='sign-in-sec'>
            <Helmet>
                <title>Register - HomeSide hotel</title>
            </Helmet>
            <h1>Sign Up</h1>
            <div>
                <form onSubmit={signUpBtn}>
                    <label htmlFor="name">Name</label>
                    <input onBlur={getNameValue} type="text" placeholder='Your name' required />

                    <label htmlFor="email">Email</label>
                    <input onBlur={getEmailValue} type="email" placeholder='Your email' required />

                    <label htmlFor="password">Password</label>
                    <input onBlur={getPasswordValue} type="password" placeholder='Enter password' required />
                    <p className='erros-style'>{errorsTwo}</p>

                    <label htmlFor="password">Confirm Password</label>
                    <input onBlur={getConfPassValue} type="password" placeholder='Confirm password' required />
                    <p className='erros-style'>{errors}</p>
                    <div className='checkbox'>
                        <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                        <label className={`checkbox-text ${agree ? '' : 'error-red'}`} htmlFor="terms">Accept our terms and conditions!</label>
                    </div>
                    {/* <p className='erros-style'>{errorsThree}</p> */}
                    <input disabled={!agree} className='submit-btn' type="submit" value="Sign Up" />


                    <p className='already-login'>All ready have an account? <Link to='/login'>Login here!</Link> </p>
                   
                </form>
                <SocialLogin></SocialLogin>
                {/* <input onClick={()=> signInWithGoogle()} className='login-with-google' type="submit" value="Continue with google" /> */}
            </div>
        </div>
    );
};

export default Signin;