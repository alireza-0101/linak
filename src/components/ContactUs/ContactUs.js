import React from 'react'
import './ContactUs.css'
import ContactBox from '../ContactBox/ContactBox'
import { useState } from 'react'
import SendMessage from '../SendMessage/SendMessage'

export default function ContactUs() {

    const [contactBox, setContactBox] = useState([
        { id: 1, title: 'تلفن', iconClass: 'bi bi-telephone-plus-fill', firstLink: 'tel:+989044748395', firstLinkText: '09044748395', secondLink: 'tel:01344334068', secondLinkText: '01344334068' },

        { id: 2, title: 'پست الکترونیک', iconClass: 'bi bi-envelope-plus-fill', firstLink: 'Info@linak.com', firstLinkText: 'Info@linak.com', secondLink: 'support@linak.com', secondLinkText: 'support@linak.com' },

        { id: 3, title: 'آدرس ما', iconClass: 'bi bi-geo-alt-fill', firstLink: 'map', firstLinkText: 'ایران ، استان تهران ، میدان آزادی خیابان 9 شرق', secondLink: '', secondLinkText: '' },
    ])

    return (
        <div className='contact-us-wrapper' id='ContactUs'>
            <div className="section-title">
                <h2>ارتباط با <b>ما</b></h2>
                <p>
                    یک واقعیت طولانی مدت این است که محتوای قابل خواندن یک صفحه باعث می شود خواننده از تمرکز بر طرح کلی متن یا فرم پاراگراف های قرار داده شده در صفحه مورد نظر خود منحرف شود.
                </p>
            </div>
            <div className="contact-boxes-wrapper">
                {
                    contactBox.map(item => {
                        return <ContactBox key={item.id} {...item} />
                    })
                }
            </div>
            <SendMessage />
        </div>
    )
}
