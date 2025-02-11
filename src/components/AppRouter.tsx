import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes, RouteNames } from "../router";
import { useAppSelector } from "../hooks/redux";
import Admin from "../pages/Admin";


const AppRouter = () => {
    const {isAuth} = useAppSelector(state => state.auth)
    const {isAdmin} = useAppSelector(state => state.admin)

    console.log(isAdmin);
    

    return (
        <Routes>
            {isAuth ? privateRoutes.map((route) => (
                <Route
                    key={route.path}
                    path={route.path}
                    element={<route.element />}
                />
            )) : publicRoutes.map((route) => (
                <Route
                    key={route.path}
                    path={route.path}
                    element={<route.element />}
                />
            ))}
            {isAdmin && <Route path={RouteNames.ADMIN} element={<Admin />}/>}
            <Route path="*" element={<Navigate to={isAuth ? "/" : "/auth"} replace />} />
        </Routes>
    );
};

export default AppRouter;
