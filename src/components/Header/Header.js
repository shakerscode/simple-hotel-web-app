import React from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import './Header.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import toast from 'react-hot-toast';



const Header = () => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
   

    const logOut = ()=>{
        signOut(auth)
        .then(()=>{
            toast.success('Sign-out successful.')
        }).catch((error) => {
            toast.error('An error happened.')
          });
    }


    return (
        <div className='header-sec'>
            <div className='header-div'>
                <div>
                    <h1>HomeSide Hotel</h1>
                </div>
                <div>
                    <nav>
                        <Link to='/'>Home</Link>
                        <Link to='/product'>Product</Link>
                        <Link to='/cart'>Cart</Link>
                        <Link to='/orders'>Orders</Link>
                        {
                            user
                                ?
                                <>
                                <Link onClick={logOut} to='/login'>Log Out</Link>
                                <Link to='/home'>{user?.displayName ? user?.displayName : 'Unknown'}</Link>
                                
                                </>
                                :
                                <><Link to='/login'>Login</Link>
                                <Link to='/signup'>Register</Link></>
                        }


                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Header;