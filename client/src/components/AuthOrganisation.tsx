import { useState } from 'react';
import Axios from 'axios';
import '../form.css';
import { Link } from 'react-router-dom';

function AuthOrganisation() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [phone_number, setPhoneNumber] = useState("");
    const [status, setStatus] = useState("");

    const [message, setMessage] = useState("");

    const handleSubmit = async () => {
        const response = await Axios.post("http://localhost:3001/adduser", {
            name: name,
            password: password,
            email: email,
            phone_number: phone_number,
            status: status
        });
        if (response.status === 200) {
            setMessage("Дані успішно надіслано на сервер");
            setName("");
            setPassword("");
            setEmail("");
            setPhoneNumber("");
            setStatus("");
        }
    };

    return (
        <div className='input-form'>
            <h2>Реєстрація</h2>
            <div className='container'>
                <Link to='/auth'><button>Приватна особа</button></Link>
                <Link to='/authorganisation'><button>Волонтерська організація</button></Link>
            </div>
            <div className='input-field'>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <label>Назва організації:</label>
            </div>
            <div className='input-field'>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                <label>Пошта:</label>
            </div>
            <div className='input-field'>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <label>Пароль:</label>
            </div>
            <div className='input-field'>
                <input type="text" value={phone_number} onChange={(e) => setPhoneNumber(e.target.value)} />
                <label>Адреса:</label>
            </div>
            <div className='input-field'>
                <input type="text" value={status} onChange={(e) => setStatus(e.target.value)} />
                <label>Статус:</label>
            </div>
            <br />
            <button onClick={handleSubmit}>Submit</button>
            <p>{message}</p>
        </div>
    );

}

export default AuthOrganisation;
