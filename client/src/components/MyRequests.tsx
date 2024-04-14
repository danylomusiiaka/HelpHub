import Header from "./Header";
import MyRequestsStyle from "../styles/MyRequests.module.css";
import CreateMyRequest from "./CreateMyRequest";
import { useState, useEffect } from "react";
import axios from "axios";

const MyRequests = () => {
    const [data, setData] = useState([]);
    const [showCreateRequest, setShowCreateRequest] = useState(false);

    useEffect(() => {
        const loadMyRequests = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:3001/volunteer"
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
                <h3 className={MyRequestsStyle.label}>
                    {data.name}
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
            <Header />

            <div className={MyRequestsStyle.modalWindowContainer}>
                {showCreateRequest && (
                    <CreateMyRequest
                        setShowCreateRequest={setShowCreateRequest}
                    />
                )}
            </div>
            <div className={MyRequestsStyle.container}>
                <div className={MyRequestsStyle.fluidContainer}>
                    <h2 className={MyRequestsStyle.pageName}>Мої запити</h2>
                    <img
                        className={MyRequestsStyle.addIcon}
                        src="./addIcon.svg"
                        onClick={() => handleAddIconClick()}
                    ></img>
                </div>
            </div>
        </div>
    );
};

export default MyRequests;
