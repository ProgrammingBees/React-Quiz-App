import React from 'react';
import Classes from '../styles/Illustration.module.css';


export default function Illustration({images}) {
    return (
        <>
            <div className={Classes.illustration}>
            <img src={images} alt="Signup" />
            </div>
        </>
    )
}
