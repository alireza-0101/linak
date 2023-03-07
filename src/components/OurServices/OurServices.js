import './OurServices.css'
import ServicesCard from '../ServicesCard/ServicesCard'

function OurServices() {
    return (
        <div className='our-services-wrapper' id='OurServices'>
            <div className="section-title">
                <h2>خدمات <b>لیناک</b></h2>
                <p>
                    یک واقعیت طولانی مدت این است که محتوای قابل خواندن یک صفحه باعث می شود خواننده از تمرکز بر طرح کلی متن یا فرم پاراگراف های قرار داده شده در صفحه مورد نظر خود منحرف شود.
                </p>
            </div>

            <div className="service-card-wrapper">
                <ServicesCard>
                    <span>1</span>
                    <i className="bi bi-graph-up-arrow"></i>
                    <h3>بازاریابی</h3>
                    <p>
                        یک واقعیت طولانی مدت این است که محتوای قابل خواندن یک صفحه باعث می شود
                    </p>
                </ServicesCard>
                <ServicesCard>
                    <span>2</span>
                    <i className="bi bi-camera"></i>
                    <h3>عکاسی</h3>
                    <p>
                        یک واقعیت طولانی مدت این است که محتوای قابل خواندن یک صفحه باعث می شود
                    </p>
                </ServicesCard>
                <ServicesCard>
                    <span>3</span>
                    <i className="bi bi-vector-pen"></i>
                    <h3>طراحی کاربری</h3>
                    <p>
                        یک واقعیت طولانی مدت این است که محتوای قابل خواندن یک صفحه باعث می شود
                    </p>
                </ServicesCard>
                <ServicesCard>
                    <span>4</span>
                    <i className="bi bi-bank"></i>
                    <h3>علائم تجاری</h3>
                    <p>
                        یک واقعیت طولانی مدت این است که محتوای قابل خواندن یک صفحه باعث می شود
                    </p>
                </ServicesCard>
                <ServicesCard>
                    <span>5</span>
                    <i className="bi bi-google"></i>
                    <h3>سئو کار</h3>
                    <p>
                        یک واقعیت طولانی مدت این است که محتوای قابل خواندن یک صفحه باعث می شود
                    </p>
                </ServicesCard>
                <ServicesCard>
                    <span>6</span>
                    <i className="bi bi-pencil"></i>
                    <h3>نویسنده محتوا</h3>
                    <p>
                        یک واقعیت طولانی مدت این است که محتوای قابل خواندن یک صفحه باعث می شود
                    </p>
                </ServicesCard>
                <ServicesCard>
                    <span>7</span>
                    <i className="bi bi-columns"></i>
                    <h3>تحولات</h3>
                    <p>
                        یک واقعیت طولانی مدت این است که محتوای قابل خواندن یک صفحه باعث می شود
                    </p>
                </ServicesCard>
                <ServicesCard>
                    <span>8</span>
                    <i className="bi bi-browser-firefox"></i>
                    <h3>طراحی وب</h3>
                    <p>
                        یک واقعیت طولانی مدت این است که محتوای قابل خواندن یک صفحه باعث می شود
                    </p>
                </ServicesCard>
            </div>
        </div>
    )
}

export default OurServices