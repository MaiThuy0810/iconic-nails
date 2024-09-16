import React from 'react'
import banner from "../../assets/img/banner-02.jpg"

import Banner from '../../components/banner'
const Contact = () => {
  return (
    <div className='contact'>
            <Banner routes="Contact" image={banner} title="Contact"/>
            <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3262.577951368199!2d-80.87883492449185!3d35.14220435939635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88569f1f348198cd%3A0xb9145eb02d642153!2si.Conic%20Nails!5e0!3m2!1svi!2s!4v1726214982023!5m2!1svi!2s"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      
    </div>
  )
}

export default Contact
