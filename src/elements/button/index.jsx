import React from 'react'
import "./style.scss"

const Button = ({text,textTransform,style}) => {
  return (
    <div className='button' style={{...style,textTransform:textTransform}}>
      {text}
    </div>
  )
}

export default Button
