import React from 'react'
import testimonialCSS from "../Testimonial/Testimonial.module.css"
import { Swiper, SwiperSlide } from 'swiper/react'
import profile1 from "../../Photos/Testimonials-02.jpg"
import profile2 from "../../Photos/Testimonials-03.jpg"
import profile3 from "../../Photos/Testimonials-07.jpg"

import "swiper/css"
import { Autoplay } from 'swiper/modules'

const Testimonial = () => {
    return (
        <div className={`${testimonialCSS.Testimonial_Wrapper} section`} id='destinations'>
            <h2>Exeptional Journey's With Travelia. </h2>

            <Swiper 
            spaceBetween={30}
            slidesPerView={3}
            loop={true}
            breakpoints={{
                0:{
                    slidesPerView:1
                },
                768:{
                    slidesPerView:2
                },
                1200:{
                    slidesPerView:3
                }
            }}
            autoplay={{
                delay:1500,
            }}
            modules={[Autoplay]}
            className={testimonialCSS.swiper}
            >
                <SwiperSlide>
                    <div className={testimonialCSS.Testimonial_Container}>
                        <div className={testimonialCSS.profile}>
                            <img src={profile1} alt="Profil" />
                         
                            <div className={testimonialCSS.detail}>
                            <span>
                                John Doe
                            </span>
                            <div className={testimonialCSS.ratings}>
                                <i className='ri-star-fill'></i>
                                <i className='ri-star-fill'></i>
                                <i className='ri-star-fill'></i>
                                <i className='ri-star-half-fill'></i>
                                <i className='ri-star-line'></i>

                            </div>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim neque minima libero consectetur eius fugiat quisquam quod aspernatur maxime distinctio.</p>
                            
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={testimonialCSS.Testimonial_Container}>
                        <div className={testimonialCSS.profile}>
                            <img src={profile2} alt="Profi2" />
                           <div className={testimonialCSS.detail}>
                           <span>
                            Amy Doe
                            </span>
                            <div className={testimonialCSS.ratings}>
                                <i className='ri-star-fill'></i>
                                <i className='ri-star-half-fill'></i>
                                <i className='ri-star-line'></i>
                                <i className='ri-star-fill'></i>
                                <i className='ri-star-fill'></i>
                                

                            </div>
                           </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim neque minima libero consectetur eius fugiat quisquam quod aspernatur maxime distinctio.</p>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={testimonialCSS.Testimonial_Container}>
                        <div className={testimonialCSS.profile}>
                            <img src={profile3} alt="Profil3" />
                            <div className={testimonialCSS.detail}>
                            <span>
                                Ember Doe
                            </span>
                            <div className={testimonialCSS.ratings}>
                                <i className='ri-star-fill'></i>
                                <i className='ri-star-half-fill'></i>
                                <i className='ri-star-line'></i>
                                <i className='ri-star-fill'></i>
                                <i className='ri-star-fill'></i>
                                

                            </div>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim neque minima libero consectetur eius fugiat quisquam quod aspernatur maxime distinctio.</p>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className={testimonialCSS.Testimonial_Container}>
                        <div className={testimonialCSS.profile}>
                            <img src={profile2} alt="Profi2" />
                           <div className={testimonialCSS.detail}>
                           <span>
                            Amy Doe
                            </span>
                            <div className={testimonialCSS.ratings}>
                                <i className='ri-star-fill'></i>
                                <i className='ri-star-half-fill'></i>
                                <i className='ri-star-line'></i>
                                <i className='ri-star-fill'></i>
                                <i className='ri-star-fill'></i>
                                

                            </div>
                           </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim neque minima libero consectetur eius fugiat quisquam quod aspernatur maxime distinctio.</p>

                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Testimonial
