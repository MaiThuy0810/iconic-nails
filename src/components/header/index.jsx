import React from 'react'
import "./style.scss"
import Button from '../../elements/button'
import logo from '../../assets/img/logo.png'
import { BrowserRouter as Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate=useNavigate()
  return (
    <div className='header-wrapper'>
     <div className='header container'>
      <div className="header-logo">
        <a className='logo'>
        <img src={logo}/>
        </a>

      </div>
      <div className="header-nav">
        <ul className='header-nav_ul'>
        <li onClick={()=>{navigate("/")}}>

            home
          </li>
          <li onClick={()=>{navigate("/about")}}>
          about
            
          </li>
          <li onClick={()=>{navigate("/specialties")}}>

          Specialties
          </li>
          <li onClick={()=>{navigate("/service")}}>

            services
          </li>
          <li onClick={()=>{navigate("/gallery")}}>

            gallery
          </li>
          <li onClick={()=>{navigate("/contact")}}>

            contacts
          </li>
        </ul>
        <Button text="button" textTransform="uppercase"/>
      </div>

    </div>
    </div>
   
  )
}

export default Header
