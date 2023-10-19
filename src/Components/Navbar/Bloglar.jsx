import React from 'react'
import EastIcon from '@mui/icons-material/East';
import './Bloglar.css'
import BloglarData from '../Data/BloglarData.js'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Bloglar = (props) => {
  const Buttons1 = ["Barchasi", "Bitiruv marosimi", "Master-klass", "Musobaqa", "Dasturlash", "Najot Quiz"]
  const [BlogData, setBlogData] = useState(BloglarData);
  const [category1, setcategory1] = useState("Barchasi")
  const navigate = useNavigate()

  function Choose1(item_cat1) {
    setcategory1(item_cat1)
    if (item_cat1 === "Barchasi") {
      setBlogData(BloglarData)
    } else {
      let filtered1 = BloglarData.filter((item) => {
        return item.id == item_cat1
      })
      setBlogData(filtered1)
    }
  }


  function ToDetail(item) {
        navigate('/watch',{state:item})
      
  }


  return (
    <div>
      <div className='bloglar-div'>
        <div className='bloglar-p1'>
          <p className='bosh-sahifa'>Bosh sahifa</p>
          <EastIcon className='icon-strelka' />
          <p className='kurslar'>Bloglar</p>
        </div>
        {/* <div className='button-div-bloglar'>
          <button className='button1'>Barchasi</button>
          <button className='button2'>Bitiruv marosimi</button>
          <button className='button3'>Master-klass</button>
          <button className='button4'>Musobaqa</button>
          <button className='button5'>Dasturlash</button>
          <button className='button5'>Najot Quiz</button>
        </div> */}
        <div className='card-bloglar'  onClick={ToDetail}>
         
          <div className='button-div-bloglar'>
            
          {
            Buttons1.map((item, index) => (
              <button  className={category1 === item ? "bg_have" : ""} key={index} onClick={() => Choose1(item)}>{item}</button>
            ))
            }
          </div>
          {
            BlogData.map((item, index) => (
              <div className='card-div' key={index} onClick={()=>ToDetail(item)}>
                <div>
                  <button className='button-dizayn' style={{ backgroundColor: item.color }}>{item.id}</button>
                  <h1 className='button-h1'> {item.title}</h1>
                  <p className='button-p'> {item.desc}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Bloglar