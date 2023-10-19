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
            <p className='yordamism'>Ismingiz</p>
            <input className='yordaminput' type="text" placeholder='Ali' />
            <p>Telefon raqamingiz</p>
            <input className='yordaminput' type="text" />
            <p>
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