import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes, RouteNames } from "../router";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import Admin from "../pages/Admin";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { login, logout } from "../store/reducers/AuthSlice";
import { admin } from "../admin";
import { adminLogin } from "../store/reducers/AdminSlice";
import Loader from "./Loader";

const AppRouter = () => {
    const dispatch = useAppDispatch();
    const { isAuth } = useAppSelector((state) => state.auth);
    const { isAdmin } = useAppSelector((state) => state.admin);

    const [user, loading, error] = useAuthState(auth);

    useEffect(() => {
        if (user) {
            dispatch(login());
        } else {
            dispatch(logout());
        }
        if (user?.email === admin.email) {
            dispatch(adminLogin());
        }
    }, [user]);

    if (loading) {
        return <Loader />;
    }

    return isAuth ? (
        <Routes>
            {privateRoutes.map((route) => (
                <Route
                    key={route.path}
                    path={route.path}
                    element={<route.element />}
                />
            ))}
            {isAdmin && <Route path={RouteNames.ADMIN} element={<Admin />} />}
            <Route path="*" element={<Navigate to="/store" replace />} />
        </Routes>
    ) : (
        <Routes>
            {publicRoutes.map((route) => (
                <Route
                    key={route.path}
                    path={route.path}
                    element={<route.element />}
                />
            ))}
            <Route path="*" element={<Navigate to="/auth" replace />} />
        </Routes>
    );
};

export default AppRouter;
