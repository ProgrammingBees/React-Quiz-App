import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';

export default function PrivateRoute({component: Component, ...restProps}) {
    const {currentUser} = useAuth();
    return (
            currentUser ? (
                <Route {...restProps}>{(props) => <Component {...props}/>}</Route>
            ) : (
                <Redirect to="/login"/>
            )
    )
}
