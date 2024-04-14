import { useEffect, useState } from "react";
import Axios from "axios";
import "../styles/form.css";
import { Link, useNavigate } from "react-router-dom";

function AuthOrganisation() {
    const [name, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [pressedContinue, setPressedContinue] = useState(false);
    const [docs, setDocs] = useState<string | ArrayBuffer | null>(null);
    const isOrganizationPage = location.pathname === "/authorganisation";
    const navigate = useNavigate();

    useEffect(() => {
        console.log("Docs are", docs);
    }, [docs]);

    const handleSubmit = async () => {
        await Axios.post("http://localhost:3001/addorganisation", {
            name,
            password,
            email,
            phone_number: phoneNumber,
            status: "smth",
            file_base64: docs,
        });
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("name", name);
        return navigate("/loginorganisation");
    };
    const encodeFileToBase64 = (file: File) => {
        var reader = new FileReader();
        reader.onload = function (event) {
            if (!event.target.result) {
                return;
            }

            const base64String = event.target.result;
            console.log(base64String);
            setDocs(base64String);
        };
        reader.readAsDataURL(file);
    };
    return (
        <div className="auth-container">
            <div className="swap-container">
                <Link to="/auth">
                    <button className="swap-button">Приватна особа</button>
                </Link>
                <Link to="/authorganisation">
                    <button
                        className={`swap-button ${
                            isOrganizationPage ? "active" : ""
                        }`}
                    >
                        Волонтерська організація
                    </button>
                </Link>
            </div>
            <div className="logo-form-container">
                <div className="auth-image-box">
                    <img className="auth-logo-img" src="logo.png" />
                    <label>Платформа для допомоги</label>
                </div>
                {!pressedContinue ? (
                    <div className="input-form">
                        <h2 className="label">Реєстрація</h2>
                        <div className="input-field">
                            <input
                                className="auth-input"
                                type="text"
                                value={name}
                                placeholder=" "
                                onChange={(e) => setFullName(e.target.value)}
                            />
                            <label className="input-label">
                                Назва організації:
                            </label>
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
                            <label className="input-label">
                                Номер телефону:
                            </label>
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
                                onChange={(e) =>
                                    setConfirmPassword(e.target.value)
                                }
                            />
                            <label className="input-label">
                                Підтвердити пароль:
                            </label>
                        </div>
                        <br />
                        <div className="auth-button-container">
                            <Link to="/">
                                <img
                                    src="left-arrow.png"
                                    className="left-arrow"
                                />
                            </Link>
                            <button
                                className="auth-submit-button"
                                onClick={() => setPressedContinue(true)}
                            >
                                Далі
                            </button>
                        </div>
                    </div>
                ) : (
                    <div>
                        <div className="input-form">
                            <h2 className="label">Реєстрація</h2>
                            <div className="input-file-field">
                                <input
                                    name="firstFile"
                                    className="auth-file-input"
                                    type="file"
                                    onChange={(event) => {
                                        encodeFileToBase64(
                                            event.target.files[0]
                                        );
                                    }}
                                />
                                <label
                                    htmlFor="firstFile"
                                    className="input-file-label"
                                >
                                    Документи, що підтверджують особу
                                </label>
                                <img
                                    className="upload-image"
                                    src="../../public/Vectorupload.svg"
                                />
                            </div>
                            <div className="input-file-field">
                                <label
                                    htmlFor="firstFile"
                                    className="input-file-label"
                                >
                                    Напрямок організації
                                </label>
                            </div>
                            <div className="radio-container">
                                <label>
                                    <input
                                        type="radio"
                                        name="option"
                                        value="vpo"
                                    />
                                    Допомога ВПО
                                </label>
                                <br />
                                <label>
                                    <input
                                        type="radio"
                                        name="option"
                                        value="invalid1"
                                    />
                                    Допомога людям з обмеженими можливостями
                                </label>
                                <br />
                                <label>
                                    <input
                                        type="radio"
                                        name="option"
                                        value="invalid2"
                                    />
                                    Притулок для тварин
                                </label>
                                <br />
                                <label>
                                    <input
                                        type="radio"
                                        name="option"
                                        value="veteran"
                                    />
                                    Волонтерство різного напрямку
                                </label>
                                <br />
                            </div>

                            <div className="input-file-field">
                                <input
                                    name="secondFile"
                                    className="auth-file-input"
                                    type="file"
                                    onChange={(event) => {
                                        encodeFileToBase64(
                                            event.target.files[0]
                                        );
                                    }}
                                />

                                <label
                                    htmlFor="secondFile"
                                    className="input-file-label"
                                >
                                    Документ, що підтверджує статус організації
                                </label>
                                <img
                                    className="upload-image"
                                    src="../../public/Vectorupload.svg"
                                />
                            </div>
                            <br />
                            <div className="auth-button-container">
                                <button
                                    onClick={() => setPressedContinue(false)}
                                    style={{
                                        border: "none",
                                        padding: "0",
                                        outline: "none",
                                    }}
                                >
                                    <img
                                        src="left-arrow.png"
                                        className="left-arrow"
                                    />
                                </button>
                                <button
                                    className="auth-submit-button"
                                    onClick={handleSubmit}
                                >
                                    Зареєструватися
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default AuthOrganisation;
