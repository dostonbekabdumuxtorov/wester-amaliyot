import React from 'react'
import Animated from '../Animeted'
import boy from './../../assets/boy.png'
import './Hero.css'

const Hero = () => {
    return (
        <div className='hero-cotnainer'>
            <div className='hero-div'>
                <Animated />
                <p className='kirishp'>O'zingizga qulay vaqtda,<br /> joyda va uslubda zamonaviy kasblarni o'rganing.</p>
                <button className='logokirish'>Kurslarni korish</button>
                <div><img className='boyimg' src={boy} alt="" /></div>
            </div>
        </div>
    )
}

export default Hero