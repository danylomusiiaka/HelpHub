import Header from "./Header";
import MyRequestsStyle from "../styles/MyRequests.module.css";
import CreateMyRequest from "./CreateMyRequest";
import { useState } from "react";

const MyRequests = () => {
    const mockData = [
        {
            label: "Grocery Shopping Assistance",
            description: "Help needed to pick up groceries from the store.",
            date: "2024-04-15",
            owner: "Jane Doe",
            typeOfHelp: "Errand",
        },
        {
            label: "Tutoring for Math",
            description: "Seeking a tutor to assist with algebra problems.",
            date: "2024-04-16",
            owner: "John Smith",
            typeOfHelp: "Education",
        },
        {
            label: "Dog Walking",
            description:
                "Looking for someone to walk my dog in the afternoons.",
            date: "2024-04-17",
            owner: "Emily Johnson",
            typeOfHelp: "Pet Care",
        },
        {
            label: "Tech Support",
            description: "Require assistance setting up a new printer.",
            date: "2024-04-18",
            owner: "David Williams",
            typeOfHelp: "Technical",
        },
    ];

    const [showCreateRequest, setShowCreateRequest] = useState(false);

    const handleAddIconClick = () => {
        setShowCreateRequest(true);
    };

    const loadRequests = () => {
        return mockData.map((request, index) => (
            <div key={index} className={MyRequestsStyle.request}>
                <h3 className={MyRequestsStyle.label}>{request.label}</h3>
                <p className={MyRequestsStyle.description}>
                    <strong>Description: </strong>
                    {request.description}
                </p>
                <p className={MyRequestsStyle.date}>
                    <strong>Date: </strong>
                    {request.date}
                </p>
                <p className={MyRequestsStyle.owner}>
                    <strong>Owner: </strong>
                    {request.owner}
                </p>
                <p className={MyRequestsStyle.typeOfHelp}>
                    <strong>Type of Help: </strong>
                    {request.typeOfHelp}
                </p>
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
                {loadRequests()}
            </div>
        </div>
    );
};

export default MyRequests;
