import React from 'react';
import Classes from '../styles/TextInput.module.css';

export default function TextInput({icon,...restProps}) {
    return (
        <>
            <div className={Classes.textInput}>
              <input {...restProps} />
              <span className="material-icons-outlined">{icon}</span>
            </div>
        </>
    )
}
