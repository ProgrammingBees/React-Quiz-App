import React from 'react';
import Classes from '../styles/Button.module.css';

export default function Button({children,className,...restProps}) {
    return (
        <>
             <button className={`${Classes.button} ${className}`} {...restProps}>
                {children}
            </button>
        </>
    )
}
