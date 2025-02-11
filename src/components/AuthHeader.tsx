import React from 'react';
import "../styles/authHeader.css"
import { useNavigate } from 'react-router-dom';
import { RouteNames } from '../router';


const AuthHeader = () => {
    const navigate = useNavigate()

    return (
        <div className='auth-header'>
            <button onClick={() => navigate(RouteNames.AUTH)}>Авторизация</button>
            <button onClick={() => navigate(RouteNames.REGISTRATION)}>Регистрация</button>
        </div>
    );
};

export default AuthHeader;