import Header from './Header'
import '../welcomepage.css'
import Footer from './Footer'

function MainPage() {
    return (
        <>
            <Header />
            <section className='section1'>
                <img src="helphub_main.jpg" alt="hands" className="image2" />
            </section>
            <section className='section2'>
                <div className="content">
                    <img src="hands.svg" alt="hands" className="image" />
                    <div className="text">
                        <p>
                            <b>HelpHub</b> - це волонтерська платформа, яка забезпечує зручний доступ до інформації щодо <b>організацій</b>, <b>проектів</b> та <b>фондів</b>, що спрямовані на допомогу:
                        </p>
                        <ul>
                            <li>Внутрішньо переміщеним особам</li>
                            <li>Ветеранам</li>
                            <li>Особам з інвалідністю</li>
                            <li>Іншим категоріям людей, що потребують підтримки</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className='section3'>
                <div className="content">
                    <div className="text">
                        <h4>Ми хочемо об'єднати волонтерів і організації, щоб забезпечити швидкий та ефективний доступ до допомоги та ресурсів для тих, хто цього потребує.</h4>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default MainPage