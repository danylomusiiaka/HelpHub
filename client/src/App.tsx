import "./styles/index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthPage from "./components/AuthPage";
import MainPage from "./components/MainPage";
import LoginPage from "./components/LoginPage";
import AuthOrganisation from "./components/AuthOrganisation";
import LoginOrganisation from "./components/LoginOrganisation";
import MyRequests from "./components/MyRequests";
import WorkPage from "./components/workPage";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/auth" element={<AuthPage />} />
                    <Route
                        path="/authorganisation"
                        element={<AuthOrganisation />}
                    />
                    <Route path="/login" element={<LoginPage />} />
                    <Route
                        path="/loginorganisation"
                        element={<LoginOrganisation />}
                    />
                    <Route path="/my-requests" element={<MyRequests />} />
                    <Route path="/vacations" element={<WorkPage />}></Route>
                </Routes>
            </Router>
        </>
    );
}

export default App;
