import React from 'react'
import banner from "../../assets/img/banner-02.jpg"
import Banner from '../../components/banner'
import BannerBook from "../../components/banner-book"
import "./style.scss"
import slide from "../../assets/img/specialties-02.jpg"
import ImageCard from '../../components/image-card'



const About = () => {
  return (
    <div className='about '>
            <Banner haveCardContact routes="About" image={banner} title="About us"/>
            <div className="about-description wrapper-title container">
              <h1>Welcome to i.Conic Nails!</h1>
              <p>Your premier destination for exceptional nail care in Charlotte, NC. Located at 6801 South Blvd A, our salon offers a chic and relaxing environment where you can enjoy top-quality manicures, pedicures, and luxurious spa services.<br/><br/>
                  
                  Our skilled technicians are dedicated to providing personalized and professional care, ensuring you leave feeling pampered and rejuvenated. At i.Conic Nails, we use only the highest quality products to achieve beautiful, long-lasting results. Experience the best in nail care and relaxation with us.</p>
            </div>

            <div className="grid-card container">

              <div className="wrapper-title">
                <h1>Specialties</h1>
                <div className="list-card">
                    <ImageCard image={slide} />
                    <ImageCard image={slide} />
                    <ImageCard image={slide} />
                    <ImageCard image={slide} />
                    <ImageCard image={slide} />
                    <ImageCard image={slide} />
                </div>
              </div>
            </div>
            <BannerBook/>

    </div>
  )
}

export default About
