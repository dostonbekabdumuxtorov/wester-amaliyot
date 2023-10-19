import React from 'react'
import './Yordam.css'
import operator from './../../assets/operator.jpg'

const Yordam = () => {
  return (
    <div>
      <div className='yordamdiv'>
        <div className='yordambig'>
          <img className='yordamimg' src={operator} alt="" />
          <div className='yordambox'>
        
         <h1 className='yordamh1'>Yordam kerakmi?</h1>
            <p className='yordamp'>  <p className='faq'>FAQ</p>boʻlimi ham sizga yordam bera olmadimi? <br />Telefon raqamingizni yozib qoldiring, biz sizga qoʻngʻiroq <br />qilamiz va birorta ham savolingiz javobsiz qolmasligiga <br />harakat qilamiz.</p>
           
            <div className='yordamlast'>
            <p className='tel-raqam'>Ismingiz</p>
            <input className='yordaminput' type="text" placeholder=' Ali' />
            <p className='tel-raqam'>Telefon raqamingiz</p>
            <input className='yordaminput' type="text" placeholder='+998 ' />
            <p className='sorov-yuborish'>
            "So‘rov yuborish" tugmasini bosish orqali
Platformadan foydalanish qoidalari ga rozilik bildirasiz.
            </p>
           <button className='yordambutton'>So'rov yuborish</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Yordam