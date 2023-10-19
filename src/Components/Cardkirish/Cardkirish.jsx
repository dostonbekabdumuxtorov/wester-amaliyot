import React from 'react'
import { useLocation } from 'react-router-dom'
import './Cardkirish.css'

const Cardkirish = () => {
    const location = useLocation()
    const {id, data, title, desc,img  } = location.state
   console.log(location)
  return (
    <div className='div-cardkirish'>
        <div className='btn2'>
        <button className='button-cardkirish'>{id}</button>
        <p>{data}</p>
        </div>
        <div className='cardkirish'><h1 className='cardkirish-h1' >{title}</h1>
        <h5>{desc}</h5></div>
        
        <div>
        <img  className='cardkirish-img1'src={img} alt="" />
        </div>
    </div>
  )
}

export default Cardkirish 