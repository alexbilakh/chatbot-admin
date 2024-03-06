import React, { useContext } from 'react';
import { AuthContext } from './contexts/AuthContext';
import { redirect } from 'react-router-dom';
const checkAuth = () => {
    const { isLoggedIn } = useContext(AuthContext);
    console.log("isLoggedIn===>", isLoggedIn)
    if (!isLoggedIn) {
        redirect('/signin');
    }
};

export { checkAuth };
