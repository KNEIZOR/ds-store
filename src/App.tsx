import React from "react";
import "./App.css";
import AppRouter from "./components/AppRouter";
import AuthHeader from "./components/AuthHeader";
import { useAppSelector } from "./hooks/redux";
import Header from "./components/Header";

function App() {
    const { isAuth } = useAppSelector((state) => state.auth);

    return (
        <div className="App">
            {isAuth ? <Header /> : <AuthHeader />}
            <AppRouter />
        </div>
    );
}

export default App;
