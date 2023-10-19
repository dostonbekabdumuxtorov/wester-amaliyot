import React from 'react'
import { useLocation } from 'react-router-dom'
import './Detail.css'

const Detail = () => {
    const location = useLocation()
    const {id, data, title, desc,img  } = location.state
   console.log(location)
  return (
    <div className='div-detail'>
        <div className='btn'>
        <button className='button-detail'>{id}</button>
        <p>{data}</p>
        </div>
        <div className='detail'><h1 className='detail-h1' >{title}</h1>
        <h5>{desc}</h5></div>
        
        <div>
        <img  className='img-detail'src={img} alt="" />
        </div>
    </div>
  )
}

export default Detail