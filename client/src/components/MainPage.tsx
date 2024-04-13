import { Link } from 'react-router-dom'

function MainPage() {
    return (
        <div>
            <Link to="/auth">
                <button>Реєстрація</button>
            </Link>
            <Link to="/login">
                <button>Логін</button>
            </Link>
        </div>
    )
}

export default MainPage