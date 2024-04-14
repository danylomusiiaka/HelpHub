import { useState } from "react";
import Axios from "axios";
import "../styles/form.css";
import { Link } from "react-router-dom";

function AuthPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [docs, setDocs] = useState<string | ArrayBuffer | null>(null);
  const isPrivatePage = location.pathname === "/auth";
  const [pressedContinue, setPressedContinue] = useState(false);

  const handleSubmit = async () => {
    await Axios.post("http://localhost:3001/adduser", {
      fullName: fullName,
      phoneNumber: phoneNumber,
      password: password,
      email: email,
      file_base_64: docs,
    });
  };

  const encodeFileToBase64 = (file: File) => {
    var reader = new FileReader();

    reader.onload = function (event) {
      if (event.target?.result) {
        const base64String = event.target.result;
        setDocs(base64String);
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="auth-container">
      <div className="swap-container">
        <Link to="/auth">
          <button className={`swap-button ${isPrivatePage ? "active" : ""}`}>
            Приватна особа
          </button>
        </Link>
        <Link to="/authorganisation">
          <button className="swap-button">Волонтерська організація</button>
        </Link>
      </div>
      <div className="logo-form-container">
        <div className="auth-image-box">
          <img className="auth-logo-img" src="logo.png" alt="Логотип" />
          <label>Платформа для допомоги</label>
        </div>
        {!pressedContinue ? (
          <div className="input-form">
            <h2 className="label">Реєстрація</h2>
            <div className="input-field">
              <input
                className="auth-input"
                type="text"
                value={fullName}
                placeholder=" "
                onChange={(event) => setFullName(event.target.value)}
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
              <label className="input-label">Підтвердити пароль:</label>
            </div>
            <br />
            <div className="auth-button-container">
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
                    if (event.target.files) {
                      encodeFileToBase64(event.target.files[0]);
                    }
                  }}
                />
                <label htmlFor="firstFile" className="input-file-label">
                  Документи, що підтверджують особу:
                </label>
                <img
                  className="upload-image"
                  src="../../public/Vectorupload.svg"
                />
              </div>
              <div className="radio-container">
                <label>
                  <input type="radio" name="option" value="vpo" />Я маю статус
                  ВПО
                </label>
                <br />
                <label>
                  <input type="radio" name="option" value="invalid1" />Я маю
                  інвалідність 1 групи
                </label>
                <br />
                <label>
                  <input type="radio" name="option" value="invalid2" />Я маю
                  інвалідність 2 групи
                </label>
                <br />
                <label>
                  <input type="radio" name="option" value="veteran" />Я ветеран
                </label>
                <br />
              </div>

              <div className="input-file-field">
                <input
                  name="secondFile"
                  className="auth-file-input"
                  type="file"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="secondFile" className="input-file-label">
                  Завантажити відповідний документ:
                </label>
                <img
                  className="upload-image"
                  src="../../public/Vectorupload.svg"
                />
              </div>
              <br />
              <div className="auth-button-container">
                <button className="auth-submit-button" onClick={handleSubmit}>
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

export default AuthPage;
