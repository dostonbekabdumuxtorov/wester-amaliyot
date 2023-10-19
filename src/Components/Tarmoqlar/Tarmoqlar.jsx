import React from 'react'
import rasm1 from './../../assets/1rasm.svg'
import rasm2 from './../../assets/rasm2.svg'
import rasm3 from './../../assets/rasm3.svg'
import rasm4 from './../../assets/rasm4.svg'
import './Tarmoqlar.css'


const Tarmoqlar = () => {
    return (
        <div className='bigtarmoqlar' >
            <h1 className='h1tarmoqlar' >Bizning afzalliklarimiz</h1>
            <div className='tarmoqlardiv' >

                <div className='tarmoq-box'>
                    <div><img className='imgtarmoqlar' src={rasm1} alt="" /></div>
                    <div >
                        <h1 className='bigh1' >Onlayn akademiya
                            <br /> <br /></h1>
                        <p className='ptarmoqlar' >«Najot Ta’lim» digital academy — bu zamonaviy kasblar o‘qitiladigan onlayn akademiya. Qayerda bo‘lishingizdan qat’i nazar: uydami yo mehmonda,<br /> daladami yo safarda — o‘zingizga qulay tarzda va vaqtda bilim olishingiz mumkin, internet va noutbuk bo‘lsa bas.
                        </p>
                    </div>
                </div>
                <div className='tarmoq-box'>
                    <div><img className='imgtarmoqlar' src={rasm2} alt="" /></div>
                    <div >
                        <h1 className='bigh1'>Shunchaki kurs emas <br /> <br /></h1>
                        <p className='ptarmoqlar'>Har bir o‘quv kursi shunday ishlab chiqilganki, ularni muvaffaqiyatli yakunlab,<br /> siz zamonaviy kasb egasiga aylanishingiz va shu sohada o‘z faoliyatingizni boshlashingiz mumkin. Hammasi o‘z qo‘lingizda.</p>

                    </div>

                </div>



                <div className='tarmoq-box'>
                    <div><img className='imgtarmoqlar' src={rasm3} alt="" /></div>
                    <div >
                        <h1 className='bigh1'>  O‘z ishining ustalari <br /><br /> </h1>
                        <p className='ptarmoqlar'>Darslar katta tajribaga ega malakali mutaxassislar tomonidan <br />tayyorlangan. O‘z ishining ustalaridan yanada ishonchli bilim va tajribaga ega bo’lasiz</p>
                    </div>
                </div>
                <div className='tarmoq-box'>
                    <div><img className='imgtarmoqlar' src={rasm4} alt="" /></div>
                    <div >
                        <h1 className='bigh1'>Interaktiv darslar <br /> <br /></h1>
                        <p className='ptarmoqlar'>Darslarni o‘zlashtirish davrida sizda savollar tug‘ilishi tabiiy holat. Mentorlarga murojaat qilishingiz, o’zingizni qiziqtirgan savollarizga javob olishingiz va tavsiyalar olishingiz mumkin</p>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Tarmoqlar



{/* <div> <img className='imgtarmoqlar' src={rasm2} alt="" /></div>
<div>

    <h1 className='bigh1'>Shunchaki kurs emas</h1>
    <p className='ptarmoqlar'>Har bir o‘quv kursi shunday ishlab chiqilganki, ularni muvaffaqiyatli yakunlab, siz zamonaviy kasb egasiga aylanishingiz va shu sohada o‘z faoliyatingizni boshlashingiz mumkin. Hammasi o‘z qo‘lingizda.</p>

</div>
<div><img className='imgtarmoqlar' src={rasm3} alt="" /></div>
<div>

    <h1 className='bigh1'>O‘z ishining ustalari</h1>
    <p className='ptarmoqlar'>Darslar katta tajribaga ega malakali mutaxassislar tomonidan tayyorlangan. O‘z ishining ustalaridan yanada ishonchli bilim va tajribaga ega bo’lasiz</p>
</div>
<div><img className='imgtarmoqlar' src={rasm4} alt="" /></div>
<div>
    <h1 className='bigh1'>Interaktiv darslar</h1>
    <p className='ptarmoqlar'>Darslarni o‘zlashtirish davrida sizda savollar tug‘ilishi tabiiy holat. Mentorlarga murojaat qilishingiz, o’zingizni qiziqtirgan savollarizga javob olishingiz va tavsiyalar olishingiz mumkin</p>
</div> */}