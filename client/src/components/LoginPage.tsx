import { useState } from "react";
import Axios from "axios";

function LoginPage() {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

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
        } else console.log("Something went wrong");
    };

    return (
        <div className="input-form">
            <p>Пошта:</p>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <p>Пароль:</p>
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default LoginPage;
