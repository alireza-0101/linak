import './Header.css'
import '../../../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import Navbar from '../Navbar/Navbar'

function Header() {
    return (
        <div className="header">
            <a className="header-logo" href="">
                <span>L</span>inak
            </a>
            <Navbar />
        </div>
    )
}

window.addEventListener('scroll', () => {
    let header = document.querySelector('.header')

    if (window.scrollY > 10) {
        header.classList.add('scroll')
    } else {
        header.classList.remove('scroll')        
    }
})

export default Header