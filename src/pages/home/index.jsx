import React from 'react'
import "./style.scss"
import Banner from '../../components/banner'
import banner from "../../assets/img/banner-02.jpg"
import about from "../../assets/img/about.jpg"
import Button from '../../elements/button'
import BannerBook from "../../components/banner-book"
import crown from "../../assets/img/bg-floral-title.png"
import slide from "../../assets/img/specialties-02.jpg"
import ImageCard from '../../components/image-card'


const Home = () => {
  return (
    <div className='home-page'>
      <Banner haveCardContact image={banner} haveButton titleBtn="CALL NOW" title="i.Conic Nails" textDescription="Let's make your life happier"/>
      <div className="home-page_welcome container
      ">
        <div className="welcome-text">
          <p className='title'>Welcome to i.Conic Nails!</p>
          <p>Your premier destination for exceptional nail care in Charlotte, NC. Located at 6801 South Blvd A, our salon offers a chic and relaxing environment where you can enjoy top-quality manicures, pedicures, and luxurious spa services.<br/><br/>
                  
              Our skilled technicians are dedicated to providing personalized and professional care, ensuring you leave feeling pampered and rejuvenated.<br/><br/>
              
              At i.Conic Nails, we use only the highest quality products to achieve beautiful, long-lasting results. Experience the best in nail care and relaxation with us.</p>
              <Button text="View more" style={{border:"1px soli white"}}/>
        </div>
        <div className="welcome-image">
          <img src={about}/>
        </div>
      </div>

      <div className="home-page_specialties container">
        <div className="wrapper-title">
           <h1>Specialties</h1>
          <div className="crown-img">
            <img src={crown}/>

          </div>
        </div>

        <div className="carousel">
          <ImageCard image={slide} />
          <ImageCard image={slide} />
          <ImageCard image={slide} />
        </div>
       
      </div>
      <BannerBook/>
    </div>
  )
}

export default Home
