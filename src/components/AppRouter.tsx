import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../router";
import { useAppSelector } from "../hooks/redux";


const AppRouter = () => {
    const {isAuth} = useAppSelector(state => state.auth)

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
            <Route path="*" element={<Navigate to={isAuth ? "/" : "/auth"} replace />} />
        </Routes>
    );
};

export default AppRouter;
