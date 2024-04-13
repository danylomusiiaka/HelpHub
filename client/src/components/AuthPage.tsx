import { useState } from 'react';
import Axios from 'axios';
import '../form.css';
import { Link } from 'react-router-dom';

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
            <h2>Реєстрація</h2>
            <div className='container'>
                <Link to='/private'><button>Приватна особа</button></Link>
                <Link to='/volounteer'><button>Волонтерська організація</button></Link>
            </div>
            <div className='input-field'>
                <input type="text" value={surname} onChange={(e) => setSurname(e.target.value)} />
                <label>Ім'я:</label>
            </div>
            <div className='input-field'>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <label>Прізвище:</label>
            </div>
            <div className='input-field'>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <label>Пошта:</label>
            </div>
            <div className='input-field'>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <label>Пароль:</label>
            </div>
            <div className='input-field'>
                <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
                <label>Адреса:</label>
            </div>
            <br />
            <button onClick={handleSubmit}>Submit</button>
            <p>{message}</p>
        </div>
    );
}

export default AuthPage;
