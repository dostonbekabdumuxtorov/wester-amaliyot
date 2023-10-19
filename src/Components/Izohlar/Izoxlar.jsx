import React from 'react'
import './Izohlar.css'
import VideoData from '../Data/video'
import Vidio from '../Vidio/Vidio'

const Izoxlar = () => {
  return (
    <div>
      <div className='divizoxlar'>
        <h1 className='h1yordam' >Bitiruvchilarimizdan izohlar</h1>
        <p className='pyordam' >Oʻquv kurslarimiz, ustozlar, qoʻlga kiritilgan bilim va koʻnikmalar, olingan natijalar haqida bitiruvchilarimizdan eshiting hamda ulardan kerakli tavsiyalar oling.

        </p>
        <div className="videos">
          {
            VideoData.map((item,index)=>(
              <Vidio item={item} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Izoxlar