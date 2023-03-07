import React from 'react'
import './ContactBox.css'

export default function ContactBox(props) {
    return (
        <div className='contact-box-wrapper'>
            <div className='dtas-wrapper'>
                <h4>{props.title}</h4>
                <a href="">{props.firstLinkText}</a>
                <a href={props.secondLink}>{props.secondLinkText}</a>
            </div>
            <div className='icon-Wrapper'>
                <i className={props.iconClass}></i>
            </div>
        </div>
    )
}
