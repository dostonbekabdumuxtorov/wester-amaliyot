import React from 'react'
import './Royxat.css'
import Login2 from './../../assets/logo-kalit.png'
import { colors } from '@mui/material'

const Royxat = () => {
  return (
    <div className='container'>
      <div className="left">
       <img className='Login2' src={Login2} alt="" />
      </div>
      <div className="right">
        <div className="ahref">
        <h7 className='kirish21'>Kirish</h7>
      <button  className='telefon'>Telefon raqam orqali</button>
        </div>
        <h5 className='raqam' >Telefon raqam</h5>
        <input className='a1' type="text" placeholder='+998 00 000 00 00' />

        <h5 className='parol2' >Parol</h5>
        <input className='a2' type="text"placeholder='Parolingizni kiriting' />


        <a className='parolni3' href="#">Parolingizni unutdingizmi?</a>

        <button className='kirishbutton1'>Kirish</button>

        <button className='googlebutton' >Google orqali</button>

        <div className="parolni">
        <h5 className='profilingiz' >Profilingiz yoqmi yo'qmi</h5> 
        <a className='royxat' href="#">Ro'yxatdan o'tish</a>
        </div>

      </div>

     
    </div>
  )
}

export default Royxat