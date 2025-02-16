import React from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { logout } from "../store/reducers/AuthSlice";
import "../styles/header.css";
import { useNavigate } from "react-router-dom";
import { RouteNames } from "../router";
import { auth } from "../firebase";

const Header = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { isAdmin } = useAppSelector((state) => state.admin);

    const userLogout = () => {
        auth.signOut()
        dispatch(logout());
    };

    return (
        <header>
            <div
                className="header-title"
                onClick={() => navigate(RouteNames.MAIN)}
            >
                <h1>STORE</h1>
            </div>
            <div className="header-search">
                <input type="text" placeholder="Найти на Store" />
            </div>
            <div className="header-right">
                {isAdmin && (
                    <button
                        className="header-admin"
                        onClick={() => navigate(RouteNames.ADMIN)}
                    >
                        Админ
                    </button>
                )}
                <div
                    className="header-basket"
                    onClick={() => navigate(RouteNames.BASKET)}
                >
                    <h2>
                        <i className="fa-solid fa-basket-shopping"></i>
                        <span>Корзина</span>
                    </h2>
                </div>
                <button onClick={userLogout}>Выйти</button>
            </div>
        </header>
    );
};

export default Header;
