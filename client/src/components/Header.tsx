import { Link } from 'react-router-dom'
import '../styles/header.css'

function Header() {
    return (
        <header>
            <div className='links'>
                <Link to='/'>
                    <img src="logo.png" alt="logo" />
                </Link>
                <a href="#section2">Про проєкт</a>
                <a href="#section3">Наші цілі</a>
                <a href="#footer">Підтримати</a>
            </div>
            <div className='buttons'>
                <Link to="/login">
                    <button>Логін</button>
                </Link>
                <Link to="/auth">
                    <button>Реєстрація</button>
                </Link>
            </div>
        </header>
    )
}
export default Header;