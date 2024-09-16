import React from 'react';
import "./style.scss"
import logo from "../../assets/img/logo.png"

const Footer = () => {
  return (
   <div className='container' style={{padding:"30px 16px"}}>
      
       <div className='footer '>
        <div className="
        con">
          <div className="logo">
          <img src={logo}/>

          </div>
          <hr/>
          <div className="">
           <h3>social media</h3>
           <div className="list-icon">
              <i class="bi bi-facebook"></i>
              <i class="bi bi-instagram"></i>
              <i class="bi bi-map-fill"></i>
           </div>
          
          </div>
        </div>
        <div className="footer-icon">
          <h3>sitemap</h3>
        <ul>
          <li>i.Conic Nails</li>
          <li>About Us</li>
          <li>Services</li>
          <li>Specialties</li>
          <li>Gallery</li>
          <li>Contacts</li>
        </ul>
        </div>
        <div className="footer-icon">
          <h3>Business Hours</h3>
          <ul>
            <li>Monday: Closed</li>
            <li>Tue - Fri: 10:00 AM - 7:00 PM</li>
            <li>Saturday: 10:00 AM - 6:00 PM</li>
            <li>sdsdsSunday: Closed</li>
          </ul>
        </div>
        <div className="footer-icon">
          <h3>Contact</h3>
          <ul>
            <li>(980) 430-1333</li>
            <li>iconiconellc@gmail.com</li>
            <li>6801 South Blvd A, Charlotte, NC 28217</li>
          </ul>
        </div>
      
      </div>  
      <div className="">
      <hr/>
       <p className='copy-right'>Copyright © 2024 <span>i.Conic Nails</span> All rights reserved. Designed by <span>Fidelia MKT</span></p>
      </div>
     

    </div>
   
  )
}

export default Footer
