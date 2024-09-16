import React from 'react'
import "./style.scss"
import book from "../../assets/img/banner-02.jpg"
import Button from '../../elements/button'

const BannerBook = () => {
  return (
    <div className="banner-book">
        <div className="banner-book_img">
             <img src={book}/>
        </div>
        <div className="banner-book_content">
            <h1>Nail care for the modern woman

            </h1>
            <p className='description'>Book your appointment today at i.Conic Nails for personalized and professional nail care. Enjoy our top-quality manicures, pedicures, and spa services in a chic and relaxing environment. Treat yourself to the best in nail care and leave feeling pampered and rejuvenated.</p>
            <Button text="CALL NOW" style={{padding:'15px 25px'}}/>
        </div>
  </div>
  )
}

export default BannerBook
