import { useState } from "react";
import MyRequestsStyles from "../styles/MyRequests.module.css";
import axios from "axios";

const CreateMyRequest = ({ setShowCreateRequest }) => {
    const [requestName, setRequestName] = useState("");
    const [requestDescription, setRequestDescription] = useState("");
    const [requestGoal, setRequestGoal] = useState("");
    const [requestToGroup, setRequestToGroup] = useState("");

    const submitHandler = async () => {
        try {
            const date = new Date().toISOString().split("T")[0];

            await axios.post("http://localhost:3001/volunteer", {
                name: requestName,
                description: requestDescription,
                organisation_name: localStorage.getItem("name"),
                recipient_criteria: requestToGroup,
                status: requestGoal,
                date: date,
            });
            console.log("Successfully published");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className={MyRequestsStyles.modalContainer}>
            <img
                className={MyRequestsStyles.cross}
                src="../../public/cross.svg"
                onClick={() => {
                    setShowCreateRequest(false);
                }}
            ></img>
            <div className="input-field">
                <input
                    className="auth-input"
                    type="text"
                    placeholder=" "
                    value={requestName}
                    onChange={(event) => {
                        setRequestName(event.target.value);
                    }}
                />
                <label className="input-label">Назва:</label>
            </div>
            <div className="input-field">
                <input
                    className="auth-input"
                    type="text"
                    placeholder=" "
                    value={requestDescription}
                    onChange={(event) => {
                        setRequestDescription(event.target.value);
                    }}
                />
                <label className="input-label">Опис:</label>
            </div>
            <div className={MyRequestsStyles.makespace1}></div>
            <div className="radio-container">
                <label>
                    <input
                        type="radio"
                        name="option"
                        value="IHelm"
                        onChange={(event) => {
                            setRequestGoal(event.target.value);
                        }}
                    />
                    Я надаю допомогу
                </label>
                <br />
                <label>
                    <input
                        type="radio"
                        name="option"
                        value="INeedHelp"
                        onChange={(event) => {
                            setRequestGoal(event.target.value);
                        }}
                    />
                    Я потребую допомогу
                </label>
            </div>
            <div className={MyRequestsStyles.makespace}></div>
            <div className="input-field">
                <input
                    className="auth-input"
                    type="text"
                    placeholder=" "
                    value={requestToGroup}
                    onChange={(event) => {
                        setRequestToGroup(event.target.value);
                    }}
                />
                <label className="input-label">Для кого</label>
            </div>
            <div className={MyRequestsStyles.makespace2}></div>
            <button
                className="auth-submit-button"
                onClick={() => submitHandler()}
            >
                Створити
            </button>
        </div>
    );
};

export default CreateMyRequest;
