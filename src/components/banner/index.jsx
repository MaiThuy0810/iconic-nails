import React from 'react'
import banner from "../../assets/img/banner-02.jpg"
import "./style.scss"
import Button from '../../elements/button'
import CardBanner from "./components/card"

const Banner = ({haveButton,title,textDescription,routes, titleBtn,image,haveCardContact}) => {
  return (
    <div className='banner'>

        <div className="banner-image">
          <img src={image} />
        </div>
        <div className="banner-content">
            {
                routes && <p style={{fontSize:"14px"}}><span style={{color:"#29aaa8"}}>Home</span><span style={{color:"white"}}> / {routes}</span></p>
            }
            {
                textDescription && 
            <p className='desciprtion'>{textDescription}</p> 
            }
            <h3>{title}</h3>
            {
                haveButton && <Button text={titleBtn} style={{border:"1px solid white", padding:'15px 25px'}}/>
            }
        </div>
        {
            haveCardContact && 

            <div className="banner-card">
            <CardBanner text="(980) 430-1333"/>
            <CardBanner text="iconiconellc@gmail.com"/>
            <CardBanner text={<div style={{display:"flex", alignItems:"center", gap:'5px'}}>
                <i class="bi bi-facebook" style={{fontSize:"20px"}}></i>
           <i class="bi bi-instagram"></i>
           <i class="bi bi-map-fill"></i>
            </div>}/>
        </div>
        }
      
       
    </div>
  )
}

export default Banner
