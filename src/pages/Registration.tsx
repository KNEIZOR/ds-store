import React, { useState } from "react";
import { Button, Form, Row } from "react-bootstrap";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { RouteNames } from "../router";

const Registration = () => {
    const [validated, setValidated] = useState(false);
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [errorPassword, setErrorPassword] = useState("");

    const handleSubmit = (event: any) => {
        event.preventDefault();
        event.stopPropagation();

        if(password.length < 6) {
            setErrorPassword("error")
        }

        setValidated(true);
        createUser();
    };

    function createUser() {
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                navigate(RouteNames.AUTH);
            })
            .catch((e) => {
                setError(e.message);
            });
    }

    return (
        <div className="auth__wrapper">
            <div className="auth">
                <Form validated={validated} onSubmit={handleSubmit}>
                    <h1>Регистрация</h1>
                    <Row className="mb-3">
                        <Form.Group>
                            <h2>Почта</h2>
                            {error ? (
                                error ===
                                "Firebase: Error (auth/email-already-in-use)." ? (
                                    <span className="error">
                                        Почта уже существует
                                    </span>
                                ) : (
                                    <span className="error">
                                        Неправильно введена почта
                                    </span>
                                )
                            ) : (
                                ""
                            )}
                            <Form.Control
                                className={error ? "input-error" : ""}
                                type="text"
                                placeholder="Введите почту"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group>
                            <h2>Пароль</h2>
                            {errorPassword ? <span className="error">Пароль должен быть больше 6 символов</span> : ""}
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
                        <Button type="submit">Зарегистрироваться</Button>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default Registration;
