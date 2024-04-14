import { useState } from "react";
import Axios from "axios";
import { Link, useNavigate } from 'react-router-dom'
import "../styles/form.css";

function LoginOrganisation() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleSubmit = async () => {
        const response = await Axios.post("http://localhost:3001/login", {
            headers: {
                "Content-Type": "application/json",
            },
            email: email,
            password: password,
        });
        console.log(response)
        if (response.status === 200) {
            const token = response.data.accessToken;
            localStorage.setItem("token", token);
            navigate("/")
        } else console.log("Something went wrong");
    };


    const isOrganisationPage = location.pathname === '/loginorganisation';


    return (
        <div className="auth-container">
            <div className="swap-container">
                <Link to='/login'>
                    <button className='swap-button'>
                        Приватна особа
                    </button>
                </Link>
                <Link to='/loginorganisation'>
                    <button className={`swap-button ${isOrganisationPage ? 'active' : ''}`}>
                        Волонтерська організація
                    </button>
                </Link>
            </div>
            <div className="logo-form-container">
                <div className="auth-image-box">
                    <img
                        className="auth-logo-img"
                        src="logo.png"
                    />
                    <label>Платформа для допомоги</label>
                </div>
                <div className="input-form login">
                    <h2 className="label ">Вхід</h2>
                    <div className="input-field ">
                        <input
                            className="auth-input"
                            type="tel"
                            value={email}
                            placeholder=" "
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label className="input-label">Пошта:</label>
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
                    <br />
                    <div className="auth-button-container">
                        <Link to="/"><img src="left-arrow.png" className="left-arrow" /></Link>
                        <button
                            className="auth-submit-button"
                            onClick={handleSubmit}
                        >
                            Увійти
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginOrganisation;
