import MyRequestsStyles from "../styles/MyRequests.module.css";

const CreateMyRequest = ({ setShowCreateRequest }) => {
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
                <input className="auth-input" type="text" placeholder=" " />
                <label className="input-label">Назва:</label>
            </div>
            <div className="input-field">
                <input className="auth-input" type="text" placeholder=" " />
                <label className="input-label">Опис:</label>
            </div>
            <div className={MyRequestsStyles.makespace1}></div>
            <div className="radio-container">
                <label>
                    <input type="radio" name="option" value="IHelm" />Я надаю
                    допомогу
                </label>
                <br />
                <label>
                    <input type="radio" name="option" value="INeedHelp" />Я
                    потребую допомогу
                </label>
            </div>
            <div className={MyRequestsStyles.makespace}></div>
            <div className="input-field">
                <input className="auth-input" type="text" placeholder=" " />
                <label className="input-label">Для кого</label>
            </div>
            <div className={MyRequestsStyles.makespace2}></div>
            <button className="auth-submit-button">Створити</button>
        </div>
    );
};

export default CreateMyRequest;
