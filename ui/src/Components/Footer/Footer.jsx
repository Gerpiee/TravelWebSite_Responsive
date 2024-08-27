import React from 'react'
import footerCSS from "../Footer/Footer.module.css"
const Footer = () => {
  return (
    <div>
      <div className={`${footerCSS.Footer_wrapper} section`}>
        <div className={footerCSS.top_container}>
            <div className={footerCSS.logo}>
                <a href="#">Reise</a>
            </div>
            <div className={footerCSS.social}>
                <i className='ri-facebook-line'></i>
                <i className='ri-instagram-line'></i>
                <i className='ri-twitter-x-line'></i>
                <i className='ri-youtube-line'></i>
            </div>
        </div>
        <div className={footerCSS.bottom_container}>
            <div className={footerCSS.footerLinks}>
                <h3>
                    About Reise.
                </h3>
                <ul>
                    <li><a href="">About Us</a></li>
                    <li><a href="">our History</a></li>
                    <li><a href="">Reviews</a></li>
                    <li><a href="">Destinations</a></li>
                    <li><a href="">Career</a></li>
                </ul>
            </div>
            <div className={footerCSS.footerLinks}>
                <h3>
                  Destinations
                </h3>
                <ul>
                    <li><a href="">USA</a></li>
                    <li><a href="">Latin Amerika</a></li>
                    <li><a href="">Asia</a></li>
                    <li><a href="">Africa</a></li>
                    <li><a href="">Europe</a></li>
                   
                </ul>
            </div>
            <div className={footerCSS.footerLinks}>
                <h3>
                  Support
                </h3>
                <ul>
                    <li><a href="">FAQ</a></li>
                    <li><a href="">Contact</a></li>
                    <li><a href="">Request a Quote</a></li>
                    <li><a href="">Booking Conditions</a></li>
                    <li><a href="">Recommendations</a></li>
                   
                </ul>
            </div>
            <div className={footerCSS.footerLinks}>
                <h3>
                  Our NewsLetter
                </h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae temporibus quae iste accusantium dolores. Error tempore pariatur qui sequi quam, quos doloremque facere eius, voluptate, placeat iusto similique. Quis, atque.</p>
                <div className={footerCSS.inputWrapper}>
                    <input type="email" placeholder='Enter your Email' />
                    <button>Subscribe</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
