import React from 'react';
import Classes from '../styles/Layout.module.css';
import Nav from './Nav';

export default function Layout({children}) {
    return (
        <div>
            <Nav/>
            <main className={Classes.main}>
                <div className={Classes.container}>
                    {children}
                </div>
            </main>
        </div>
    )
}
