import React from 'react'
import './Malumotlar.css'
import malumotlarlogo from '../../assets/wester-yangi.png'
import TelegramIcon from '@mui/icons-material/Telegram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

const Malumotlar = () => {
  
  return (
    <div className='malumotlar-big' >
        <div className='malumotlar-div'>
          <div>
          <img className='malumotlar-logo' src={malumotlarlogo} alt="" />
            <p className='malumotlar-p' >Onlayn platformaga tegishli barcha <br /> materiallar "NAJOT TA‘LIM MARKAZI" <br />MCHJning mulki hisoblanadi. Ushbu materiallardan onlayn ta‘lim olishdan tashqari nusxa ko‘chirish, tarqatish va boshqa maqsadlarda foydalanish qonunan man etiladi.</p>
            <p  className='malumotlar-p2'>© Najot Ta'lim, 2023Barcha huquqlar himoyalangan.</p>
          </div >
           
           <div className='malumotlar-div6'>
               <div className='divm1'>
               <div><h3>Malumotlar</h3>
                <p className='p'>FAQ</p>
                <p className='p'>Blog</p>
                <p className='p'>Ommaviy ofera</p>
               </div>
               <div><h3>Ommabop kurslar</h3>
                <p className='p'>Moushn dizayn</p>
                <p className='p'>SMM onlayn</p>
                <p className='p'>Dasturlash foundation</p>
                <p className='p'>Social Media Design</p>
               </div>
               <div><h3>Bizning loyihalar</h3>
                <p className='p'>Osmondagi bolalar</p>
                <p className='p'>0 dan 1 gacha</p>
                <p className='p'>Abutech</p>
                <p className='p'>Alohida mavzu</p>
               </div>
               </div>
               <div className='divm2' >
               <div><h3>Toshkent shahri, Chilonzor-9, <br />Qatortol ko‘chasi</h3>
               <p className='p'>Mo‘ljal: Rayhon milliy taomlari qarshi tomoni,<br /> 1- va 2-uylar orqa tomoni.</p></div>
               <div><h3>Tarmoqlar</h3>
               <div className='m-icon'>
                <TelegramIcon className='icon-t' />
                <FacebookIcon className='icon-t'/>
                <YouTubeIcon className='icon-t'/>
                <InstagramIcon className='icon-t' />
               </div>
               </div>
               <div><h3>Telefon raqami</h3>
                <p className='p'>+998(77)8889888</p>
               </div>
               </div>
            </div>
           
        </div>
    </div>
  )
}

export default Malumotlar