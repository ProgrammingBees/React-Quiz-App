import React from 'react';
import images from '../../assets/images/signup.svg';
import Illustration from '../Illustration';
import LoginForm from '../LoginForm';



export default function Login() {
    return (
        <>
            <h1>Login to your account</h1>
            <div className="column">
                <Illustration images={images}/>
                <LoginForm/>
            </div>
            
        </>
    )
}
