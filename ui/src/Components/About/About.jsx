import React from 'react'
import aboutImg from "../../Photos/about-bg.png"
import aboutCSS from "../About/About.module.css"
const About = () => {
    return (
        <div className={`${aboutCSS.about_wrapper} section`} id='about'>
            <div className={aboutCSS.about_image}>
                <img src={aboutImg} alt="About" />
            </div>
            <div className={aboutCSS.about_content}>
                <h2>Discover Organized <br /> Advantures the, <br />
                    Ultimate Travel Hack
                </h2>
                <p>Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Architecto aliquid rem 
                fugit sint voluptate. Earum dolores voluptatem 
                voluptate accusamus ab!</p>
                <div className={aboutCSS.about}>
                    <p><i className='ri-building-4-line'></i> Accommodation</p>
                    <p><i className='ri-car-line'></i> Transpotation allowance</p>
                    <p><i className='ri-magic-line'></i> Exclusive Experiences </p>
                    <p><i className='ri-instance-line'></i> local recommendatios </p>
                    <p><i className='ri-pin-distance-line'></i>personalized trip crafting  </p>
                    <p><i className='ri-phone-line'></i> 24/7 Support</p>
                </div>
            </div>
        </div>
    )
}

export default About
