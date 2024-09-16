import React from 'react'
import "./style.scss"

const ImageCard = ({image}) => {
  return (
    <div className="carousel-img">
    <img src={image}/>
    <div className="carousel-img_content">
        <div className="list-icon" style={{display:'flex', gap:'10px'}}>
          <i class="bi bi-facebook" style={{color:"white", fontSize:"30px"}}></i>
          <i class="bi bi-instagram" style={{color:"white", fontSize:"30px"}}></i>
          <i class="bi bi-map-fill" style={{color:"white", fontSize:"30px"}}></i>
      </div>
    </div>
  </div>
  )
}

export default ImageCard
