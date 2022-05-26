import React from 'react';
import './SocialLogin.css'
import google from '../../imges/google.png';
import facebook from '../../imges/facebook.png';
import github from '../../imges/github.png'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import {useNavigate } from 'react-router-dom';
import toast, { LoaderIcon } from 'react-hot-toast';


const SocialLogin = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, gitUser, gitLoading, gitError] = useSignInWithGithub(auth);

    let signInErrors;
    let error2 ;
    if(error || gitError){
        if(error?.message?.includes('popup-closed-by-user') || gitError?.message?.includes('popup-closed-by-user') || gitError?.message){
            signInErrors = <p className='error-wrong'>You denied to login with google</p>
            toast.error('You denied to login with google', {id: 'denied'});
        }else{
            error2 = <div> <p>{error?.message}</p></div>
        }
        

    }

    let singnLoading;
    if(gitLoading){
        singnLoading = <p>Loading</p>
    }
    if(user || gitUser){
        navigate('/home')
    }
    return (
        <div>
            <div className='or-sec-div'>
                <div className='or-first-div'></div>
                <span className='or-text'>Or</span>
                <div className='or-first-div'></div>
                <br />
            </div>
            <p>{signInErrors}</p>
            <p>{error2}</p>
            <div onClick={() => signInWithGoogle()} className='social-login-system'>
                <div>
                    <img src={google} alt="" width={'60px'} />
                </div>
                <div>
                    <p>Continue with Google</p>
                </div>
            </div>
            <div className='social-login-system'>
                <div>
                    <img src={facebook} alt="" width={'50px'} />
                </div>
                <div>
                    <p>Continue with Facebook</p>
                </div>
            </div>
            <p>{singnLoading}</p>
            <div onClick={()=> signInWithGithub()} className='social-login-system'>
                <div>
                    <img src={github} alt="" width={'70px'} height={'65px'} />
                </div>
                <div>
                    <p>Continue with GitHub</p>
                </div>
            </div>
        </div>
    );
};

export default SocialLogin;