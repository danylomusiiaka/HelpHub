import { useState } from "react";
import Axios from "axios";
import "../form.css";
import { Link } from "react-router-dom";

function AuthPage() {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const handleSubmit = async () => {
        const response = await Axios.post("http://localhost:3001/adduser", {
            fullName: fullName,
            phoneNumber: phoneNumber,
            password: password,
            email: email,
        });
        if (response.status === 200) {
        }
    };

    return (
        <div className="auth-container">
            <div className="swap-container">
                <button className="swap-button">Приватна особа</button>
                <button className="swap-button">
                    Волонтерська організація
                </button>
            </div>
            <div className="logo-form-container">
                <div className="auth-image-box">
                    <img
                        className="auth-logo-img"
                        src="../../public/logo.png"
                    />
                    <label>Платформа для допомоги</label>
                </div>
                <div className="input-form">
                    <h2 className="label">Реєстрація</h2>
                    <div className="input-field">
                        <input
                            className="auth-input"
                            type="text"
                            value={fullName}
                            placeholder=" "
                            onChange={(e) => setFullName(e.target.value)}
                        />
                        <label className="input-label">ПІБ:</label>
                    </div>
                    <div className="input-field">
                        <input
                            className="auth-input"
                            type="email"
                            value={email}
                            placeholder=" "
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label className="input-label">Пошта:</label>
                    </div>
                    <div className="input-field">
                        <input
                            className="auth-input"
                            type="tel"
                            value={phoneNumber}
                            placeholder=" "
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                        <label className="input-label">Номер телефону:</label>
                    </div>
                    <div className="input-field">
                        <input
                            className="auth-input"
                            type="password"
                            value={password}
                            placeholder=" "
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <label className="input-label">Пароль:</label>
                    </div>
                    <div className="input-field">
                        <input
                            className="auth-input"
                            type="password"
                            value={confirmPassword}
                            placeholder=" "
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        <label className="input-label">
                            Підтвердити пароль:
                        </label>
                    </div>
                    <br />
                    <div className="auth-button-container">
                        <button
                            className="auth-submit-button"
                            onClick={handleSubmit}
                        >
                            Далі
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AuthPage;
