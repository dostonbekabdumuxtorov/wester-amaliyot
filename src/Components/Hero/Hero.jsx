import React from 'react'
import Animated from '../Animeted'
import boy from './../../assets/boy.png'
import './Hero.css'
import {useNavigate} from 'react-router-dom'

const Hero = () => {
    const navigate = useNavigate()
    return (
        <div className='hero-cotnainer'>
            <div className='hero-div'>
                <Animated />
                <p className='kirishp'>O'zingizga qulay vaqtda,<br /> joyda va uslubda zamonaviy kasblarni o'rganing.</p>
                <button onClick={()=>navigate('/Kurslar')} className='logokirish'>Kurslarni korish</button>
                <div><img className='boyimg' src={boy} alt="" /></div>
            </div>
        </div>
    )
}

export default Hero