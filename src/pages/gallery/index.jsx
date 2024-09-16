import React from 'react'
import banner from "../../assets/img/banner-02.jpg"
import slide from "../../assets/img/specialties-02.jpg"
import ImageCard from '../../components/image-card'
import BannerBook from "../../components/banner-book"

import Banner from '../../components/banner'
import "./style.scss"

const Gallery = () => {
  return (
    <div className='gallery '>
    <Banner haveCardContact routes="Gallery" image={banner} title="Gallery"/>
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

export default Gallery
