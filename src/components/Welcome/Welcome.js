import './Welcome.css'
import SiteIntroduction from '../SiteIntroduction/SiteIntroduction'

function Welcome() {
    return (
        <section className='welcome-box'>
            <div className="section-title">
                <span>ما خلاق هستیم</span>
                <h2>به وبسایت ما <b>خوش آمدید</b></h2>
                <p>یک واقعیت طولانی مدت این است که محتوای قابل خواندن یک صفحه باعث می شود خواننده از تمرکز بر طرح کلی متن یا فرم پاراگراف های قرار داده شده در صفحه مورد نظر خود منحرف شود.
                </p>
            </div>
            
            <div className='introduction-box-wrapper'>
                <SiteIntroduction>
                    <i className="bi bi-magnet"></i>
                    <h3>طراحی خلاق</h3>
                    <p>
                        یک واقعیت طولانی مدت این است که محتوای قابل خواندن یک صفحه باعث می شود خواننده از تمرکز بر طرح کلی متن یا فرم پاراگراف های قرار داده شده در صفحه مورد نظر خود منحرف شود.
                    </p>
                </SiteIntroduction>
                <SiteIntroduction>
                    <i className="bi bi-card-text"></i>
                    <h3>نمادهای دوستانه</h3>
                    <p>
                        یک واقعیت طولانی مدت این است که محتوای قابل خواندن یک صفحه باعث می شود خواننده از تمرکز بر طرح کلی متن یا فرم پاراگراف های قرار داده شده در صفحه مورد نظر خود منحرف شود.
                    </p>
                </SiteIntroduction>
                <SiteIntroduction>
                    <i className="bi bi-headset"></i>
                    <h3>پشتیبانی سریع</h3>
                    <p>
                        یک واقعیت طولانی مدت این است که محتوای قابل خواندن یک صفحه باعث می شود خواننده از تمرکز بر طرح کلی متن یا فرم پاراگراف های قرار داده شده در صفحه مورد نظر خود منحرف شود.
                    </p>
                </SiteIntroduction>
            </div>
        </section>
    )
}

export default Welcome