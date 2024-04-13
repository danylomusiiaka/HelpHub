import { useState } from 'react';
import Axios from 'axios';

function AuthPage() {
    const [surname, setSurname] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async () => {
        const response = await Axios.post("http://localhost:3001/adduser", {
            surname: surname,
            name: name,
            password: password,
            email: email,
            address: address
        });
        if (response.status === 200) {
            setMessage("Дані успішно надіслано на сервер");
            setSurname("");
            setName("");
            setPassword("");
            setEmail("");
            setAddress("");
        }
    };

    return (
        <div className='input-form'>
            <p>Ім'я:</p>
            <input type="text" value={surname} onChange={(e) => setSurname(e.target.value)} />
            <p>Прізвище:</p>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <p>Пошта:</p>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <p>Пароль:</p>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <p>Адреса:</p>
            <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
            <br />
            <button onClick={handleSubmit}>Submit</button>
            <p>{message}</p>
        </div>
    );
}

export default AuthPage;
