import './Banner.css'
import Typewriter from '../../../node_modules/typewriter-effect/dist/core'

function Banner() {
  return (
    <div className="banner-wrapper">
      <span className='sub-title'>مــــا خـــــــــــلاق هــــســـتـــــــــــیم</span>
      <h1 className='title'>بهــــــــترین <span id='title-span'></span> آژانس رایــــــــگان</h1>
      <p className='descraption'>
        یک واقعیت طولانی مدت این است که محتوای قابل خواندن یک صفحه باعث می شود خواننده از تمرکز بر طرح کلی متن یا فرم پاراگراف های قرار داده شده در صفحه مورد نظر خود منحرف شود.
      </p>
      <div className='btns-box'>
        <a href='#ContactUs'>
          <button className='main-btn'>شروع به کار</button>
        </a>
        <a href='#OurPortfolio'>
          <button>نمونه کار ما</button>
        </a>
      </div>
      <img className='top-left-image' src='image/2.png' />
      <img className='bottom-image' src='image/3.png' />
      <img className='top-right-image' src='image/6.png' />
      <img className='rock-image' src='image/border.png' />
    </div>
  )
}

window.addEventListener('load', () => {
  let titleSpan = document.getElementById('title-span')

  let titleSpanTypeWriter = new Typewriter(titleSpan, {
    loop: true
  })

  titleSpanTypeWriter
    .typeString('موبایل هوشمند')
    .pauseFor(2000)
    .deleteAll()
    .typeString('دوربین دیجیتال')
    .pauseFor(2000)
    .deleteAll()
    .typeString('لپتاپ حرفه ای')
    .pauseFor(2000)
    .deleteAll()
    .typeString('سیستم نانو')
    .pauseFor(2000)
    .start()
})

export default Banner