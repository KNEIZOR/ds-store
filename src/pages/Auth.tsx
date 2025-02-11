import React, { useState } from "react";
import { Button, Form, Row } from "react-bootstrap";
import "../styles/auth.css";
import { useAppDispatch } from "../hooks/redux";
import { login } from "../store/reducers/AuthSlice";
import { useNavigate } from "react-router-dom";
import { RouteNames } from "../router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Auth = () => {
    const [validated, setValidated] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleSubmit = (event: any) => {
        event.preventDefault();
        event.stopPropagation();

        setValidated(true);
        checkUser();
    };

    const checkUser = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user);
                
                dispatch(login());
                navigate(RouteNames.MAIN)
            })
            .catch((e) => {
                setError(e.message);
            });
    };

    return (
        <div className="auth__wrapper">
            <div className="auth">
                <Form validated={validated} onSubmit={handleSubmit}>
                    <h1>Авторизация</h1>
                    <Row className="mb-3">
                        <Form.Group>
                            <h2>Почта</h2>
                            {error ? (
                                <span className="error">
                                    Неправлиьная почта или пароль
                                </span>
                            ) : (
                                ""
                            )}
                            <Form.Control
                                required
                                type="text"
                                placeholder="Введите почту"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group>
                            <h2>Пароль</h2>
                            <Form.Control
                                type="password"
                                placeholder="Введите пароль"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </Form.Group>
                    </Row>
                    <div className="buttons">
                        <p onClick={() => navigate(RouteNames.REGISTRATION)}>
                            Нет аккаунта?
                        </p>
                        <Button type="submit">Войти</Button>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default Auth;
