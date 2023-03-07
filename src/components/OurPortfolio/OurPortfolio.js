import React from 'react'
import './OurPortfolio.css'

export default function OurPortfolio() {
    return (
        <div className='portfolio-box' id='OurPortfolio'>
            <div className="section-title">
                <h2>نمونه کار <b>ما</b></h2>
                <p>
                    یک واقعیت طولانی مدت این است که محتوای قابل خواندن یک صفحه باعث می شود خواننده از تمرکز بر طرح کلی متن یا فرم پاراگراف های قرار داده شده در صفحه مورد نظر خود منحرف شود.
                </p>
            </div>
            <div className="photos-wrapper">
                <div>
                    <a target='_blank' href="image/portfolio-img1.jpg">
                        <img src="image/portfolio-img1.jpg" alt="Portfolio" />
                        <i className="bi bi-arrows-fullscreen"></i>
                    </a>
                </div>
                <div>
                    <a target='_blank' href="image/portfolio-img2.jpg">
                        <img src="image/portfolio-img2.jpg" alt="Portfolio" />
                        <i className="bi bi-arrows-fullscreen"></i>
                    </a>
                </div>
                <div>
                    <a target='_blank' href="image/portfolio-img3.jpg">
                        <img src="image/portfolio-img3.jpg" alt="Portfolio" />
                        <i className="bi bi-arrows-fullscreen"></i>
                    </a>
                </div>
                <div>
                    <a target='_blank' href="image/portfolio-img4.jpg">
                        <img src="image/portfolio-img4.jpg" alt="Portfolio" />
                        <i className="bi bi-arrows-fullscreen"></i>
                    </a>
                </div>
                <div>
                    <a target='_blank' href="image/portfolio-img5.jpg">
                        <img src="image/portfolio-img5.jpg" alt="Portfolio" />
                        <i className="bi bi-arrows-fullscreen"></i>
                    </a>
                </div>
                <div>
                    <a target='_blank' href="image/portfolio-img6.jpg">
                        <img src="image/portfolio-img6.jpg" alt="Portfolio" />
                        <i className="bi bi-arrows-fullscreen"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}
