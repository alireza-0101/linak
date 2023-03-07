import React from 'react'
import './JoinUs.css'

export default function JoinUs() {
    return (
        <div className='wrapper'>
            <p className='join-us-box-text'>به ما بپیوندید! برای آخرین بروزرسانی ها و اخبار ثبت نام کنید.</p>

            <div className="input-group-box">
                <input type="text" placeholder='شماره موبایل خود را وارد کنید...' className='singin-input' />
                <button><i className="bi bi-telephone-fill"></i></button>
            </div>

            <img src="image/border.png" alt="border" className='top-border' />
            <img src="image/border.png" alt="border" className='bottom-border' />
        </div>
    )
}
