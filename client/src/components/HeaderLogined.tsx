import { Link } from 'react-router-dom'
import '../styles/header.css'

function Header() {
    return (
        <header>
            <div className='links'>
                <Link to='/'>
                    <img src="logo.png" alt="logo" />
                </Link>
                <a href="#section2">Мої запити</a>
                <a href="#section3">Актуальні запити</a>
                <a href="#footer">Працевлаштування</a>
                <a href="#footer">Допомога</a>
            </div>
            <div className="profile-popup">
                <Link to='/profile'>
                    <img src="profile.svg" style={{ width: '40px' }} />
                </Link>
                <div className="popup-content">
                    <div className="verified-info">
                        <img src="verified.svg" alt="" />
                        <p>Верифіковано</p>
                    </div>
                    <button>Вихід</button>
                </div>

            </div>
        </header>
    )
}
export default Header;