import React from 'react'
import banner from "../../assets/img/banner-02.jpg"
import slide from "../../assets/img/specialties-02.jpg"
import ImageCard from '../../components/image-card'
import BannerBook from "../../components/banner-book"

import Banner from '../../components/banner'
import "./style.scss"
const Specialties = () => {
  return (
    <div className='specialties '>
            <Banner haveCardContact routes="Specialties" image={banner} title="Specialties"/>
            <div className="wrapper-title container">
                <div className="list-card">
                    <ImageCard image={slide} />
                    <ImageCard image={slide} />
                    <ImageCard image={slide} />
                    <ImageCard image={slide} />
                    <ImageCard image={slide} />
                    <ImageCard image={slide} />
                </div>
              </div>
            <BannerBook/>

      
    </div>
  )
}

export default Specialties
