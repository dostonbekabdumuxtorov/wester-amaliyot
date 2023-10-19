import React from 'react'
import './Yonalishlar.css'

const Yonalishlar = () => {
  return (
    <div>
      <div className='divyonalishlar' >
        <h1 className='h1yonalishlar' >Yo'nalishlar bo'yicha kurslar</h1>
        <p className='pyonalishlar1'>Zamonaviy sohalardan birini o‘rganing va talabgir kasb egasi bo‘ling!</p>
        <div className='bigbox'>
          <div className='bigbox2'>
            <div className='boxyonalishlar'>
              <h1 className='boxh1' >Moushn dizayn</h1>
              <p className='boxp'>Kurs moushn dizayn sohasini...</p>
            </div>
            <div className='boxyonalishlar'>
              <h1 className='boxh1'>SMM onlayn</h1>
              <p className='boxp'> Ijtimoiy tarmoqlar orqali turli...</p>
            </div>
            <div className='boxyonalishlar'>
              <h1 className='boxh1'>Dasturlash foundation</h1>
              <p className='boxp'>Foundation dasturlash kursida</p>
            </div>
            <div className='boxyonalishlar'>
              <h1 className='boxh1'>Soicial Media Design</h1>
              <p className='boxp'>Ijtimoiy tarmoqlar uchun chiro...</p>
            </div>
          </div>
          <div className='bigbox1'>
            <div className='boxyonalishlar'>
              <h1 className='boxh1'>Adobe Illustrator</h1>
              <p className='boxp'>Adobe Illustrator - vektorli...</p>
            </div>
            <div className='boxyonalishlar'>
              <h1 className='boxh1'>.NET mutaxassislik</h1>
              <p className='boxp'>.NET mutaxassislik kursi...</p>
            </div>
            <div className='boxyonalishlar'>
              <h1 className='boxh1'>Kopirayting onlayn</h1>
              <p className='boxp'>Ijtimoiy tarmoqlar uchun chiro...</p>
            </div>
            <div className='boxyonalishlar'>
              <h1 className='boxh1'>Adoble Fotoshop</h1>
              <p className='boxp'>Adoble -grafik dizay...</p>
            </div>
          </div>
        </div>
        <p className='pyonalishlar3'>Barcha kurslarni ko‘rish</p>
      </div>
    </div>
  )
}

export default Yonalishlar