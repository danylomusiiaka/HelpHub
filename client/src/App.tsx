import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthPage from "./components/AuthPage";
import MainPage from "./components/MainPage";
import LoginPage from "./components/LoginPage";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/auth" element={<AuthPage />} />
                    <Route path="/login" element={<LoginPage />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
