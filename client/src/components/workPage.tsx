import HeaderLogined from "./HeaderLogined";
import Header from "./Header";
import MyRequestsStyle from "../styles/MyRequests.module.css";
import CreateMyRequest from "./CreateMyRequest";
import { useState, useEffect } from "react";
import axios from "axios";

const WorkPage = () => {
    const [data, setData] = useState([]);
    const [showCreateRequest, setShowCreateRequest] = useState(false);
    const isLogined = localStorage.getItem("isLogined");

    useEffect(() => {
        const loadMyRequests = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:3001/free-vacations"
                );
                const requestData = await response.data;
                console.log(requestData);
                setData(requestData);
            } catch (error) {
                console.error("Error loading requests:", error);
            }
        };

        loadMyRequests();
    }, []);

    const handleAddIconClick = () => {
        setShowCreateRequest(true);
    };

    const loadRequests = () => {
        return data.map((request, index) => (
            <div key={index} className={MyRequestsStyle.request}>
                <h3 className={MyRequestsStyle.label}>{request.title}</h3>
                <p className={MyRequestsStyle.typeOfHelp}>
                    <strong>Зарплата: </strong>
                    {request.salary}
                </p>
                <p className={MyRequestsStyle.description}>
                    <strong>Опис: </strong>
                    {request.description}
                </p>
                <p className={MyRequestsStyle.owner}>
                    <strong> </strong>
                    {request.company}
                </p>
                <button className={MyRequestsStyle.respondButton}>
                    Відгукнутися
                </button>
            </div>
        ));
    };

    return (
        <div>
            {isLogined === "true" ? <HeaderLogined /> : <Header />}

            <div className={MyRequestsStyle.modalWindowContainer}>
                {showCreateRequest && (
                    <CreateMyRequest
                        setShowCreateRequest={setShowCreateRequest}
                    />
                )}
            </div>
            <div className={MyRequestsStyle.container}>
                <div className={MyRequestsStyle.fluidContainer}>
                    <h2 className={MyRequestsStyle.pageName}>Вакансії</h2>
                </div>
                {loadRequests()}
            </div>
        </div>
    );
};

export default WorkPage;
