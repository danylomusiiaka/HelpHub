import HeaderLogined from "./HeaderLogined";
import Header from "./Header";
import MyRequestsStyle from "../styles/MyRequests.module.css";
import CreateMyRequest from "./CreateMyRequest";
import { useState, useEffect } from "react";
import axios from "axios";

const AllRequests = () => {
    const [data, setData] = useState<any>([]);
    const [showCreateRequest, setShowCreateRequest] = useState(false);
    const isLogined = localStorage.getItem("isLogined");

    useEffect(() => {
        const loadMyRequests = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:3001/volunteer"
                );
                const requestData: [{ name: string }] = await response.data;
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
                <h3 className={MyRequestsStyle.label}>
                    {request.name}
                    <img
                        className={MyRequestsStyle.editSvg}
                        src="../../public/edit.svg"
                        alt="edit svg"
                    />
                </h3>
                <p className={MyRequestsStyle.description}>
                    <strong>Опис: </strong>
                    {request.description}
                </p>
                <p className={MyRequestsStyle.date}>
                    <strong>Дата публікації: </strong>
                    {request.date}
                </p>
                <p className={MyRequestsStyle.owner}>
                    <strong> </strong>
                    {request.organisation_name}
                </p>
                <p className={MyRequestsStyle.typeOfHelp}>
                    <strong>Тип допомоги: </strong>
                    {request.recipient_criteria}
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
                    <h2 className={MyRequestsStyle.pageName}>Всі запити</h2>
                    <img
                        className={MyRequestsStyle.addIcon}
                        src="./addIcon.svg"
                        onClick={() => handleAddIconClick()}
                    ></img>
                </div>
                {loadRequests()}
            </div>
            {loadRequests()}
        </div>
    );
};

export default AllRequests;
