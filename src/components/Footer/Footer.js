import React from 'react'
import './Footer.css'
import Navbar from '../Navbar/Navbar'

export default function Footer() {
    return (
        <footer className='footer'>
            <img className='footer-border' src="image/border.png" alt="" />
            <p className='copy-right'>
                کپی رایت © 1401 تمام حقوق سایت محفوظ است. طراحی و توسعه توسط <a href="https://erfanm.ir" target="_blank">عرفان</a>
            </p>
            <ul>
                <li><a href="#">شرایط و ضوابط</a></li> |
                <li><a href="#">سیاست ویژه</a></li> |
                <li><a href="#">نقشه سایت</a></li>
            </ul>
        </footer>
    )
}
