import React from 'react';
import Classes from '../styles/Form.module.css';

export default function Form({children,className, ...restProps}) {
    return (
        <form className={`${Classes.form} ${className}`} action="#" {...restProps}>
            {children}
        </form>
    )
}
