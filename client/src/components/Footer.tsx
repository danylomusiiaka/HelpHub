import '../styles/footer.css'

function Footer() {
    return (
        <footer id="footer">
            <div>
                <img src="logo.png" alt="logo" />
                <p>Розроблено командою С--</p>
            </div>
            <div>
                <h4>Наші соцмережі</h4>
                <p><a href="">Telegram</a></p>
                <p><a href="">Instagram</a></p>

            </div>
            <div>
                <h4>Зворотній зв'язок</h4>
                <p>
                    <a href="">AI bot</a>
                </p>
                <p>
                    <a href="">Gmail</a>
                </p>
            </div>
            <div className='idea'>
                <h3>Сподобалась ідея? Підтримай наш проєкт</h3>
                <button>Підтримати</button>
            </div>
        </footer>
    )
}

export default Footer;