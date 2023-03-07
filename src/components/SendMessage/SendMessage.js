import React from 'react'
import './SendMessage.css'

export default function SendMessage() {
    return (
        <form className='send-message-wrapper'>
            <div className='inputs'>
                <input placeholder='نام خود را وارد کنید' type="text" />
                <input placeholder='شماره تلفن خود را وارد کنید' type="tell" />
            </div>
            <textarea placeholder='پیام خود را وارد کنید'></textarea>
            <button type='submit'>ارسال پیام</button>
        </form>
    )
}
