import React from 'react'
import './Navbar.css'

function Navbar() {
    return (
        <div className='navbar'>
            <ul className="navbar-ul">
                <li className='active'><a href='/'>صفحه اصلی</a></li>
                <li><a href='#aboutUs'>درباره ما</a></li>
                <li><a href='#OurServices'>خدمات ما</a></li>
                <li><a href='#Ourteam'>تیم ما</a></li>
                <li><a href='#OurPortfolio'>نمونه کار ها</a></li>
                <li><a href='#ContactUs'>تماس با ما</a></li>
            </ul>
            <i onClick={menuToggle} className="bi bi-list"></i>
        </div>
    )
}

function menuToggle() {
    let navbarUl = document.querySelector('.navbar-ul')

    navbarUl.classList.toggle('show')
}

export default Navbar