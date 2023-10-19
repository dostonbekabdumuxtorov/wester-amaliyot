import React from 'react'
import './Kurslar.css'
import SearchIcon from '@mui/icons-material/Search';
import EastIcon from '@mui/icons-material/East';
import KurslarData from '../Data/Data'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Kurslar = (props) => {
  const Buttons = ["Barchasi", "Dizayn", "Marketing","Boshqa","Dasturlash"]
  const [KursData, setKursData] = useState(KurslarData);
  const [category, setcategory] = useState("Barchasi")
  const [search_word, setsearch_word] = useState("")
  const navigate = useNavigate()


  function Choose(item_cat) {
    setcategory(item_cat)
    if(item_cat === "Barchasi"){
      setKursData(KurslarData)
    }else{
      let filtered = KurslarData.filter((item)=>{
        return item.id == item_cat
      })
      setKursData(filtered)
    }
  }

  function Search(word){
    let filtered = KurslarData.filter((item)=>{
      return item.id.toLowerCase().includes(word.toLowerCase()) || item.title?.toLowerCase().includes(word.toLowerCase())
    })

    setKursData(filtered)
  }

  function Cardkirish(item) {
    navigate('/kurs' , {state:item})
    
  }


  return (
    <div>
      <div className='kurslar-div'>
        <div className='kurslar-p1'>
          <p className='bosh-sahifa'>Bosh sahifa</p>
          <EastIcon className='icon-strelka' />
          <p className='kurslar'>Kurslar</p>
        </div>
        <div className='h1-input'>
          <h1 className='barchaoquv-kurslari'>Barcha o'quv kurslari</h1>
          <input className='kurslar-input' type="text" placeholder='Izlash' onChange={(e)=>Search(e.target.value)} />
          <SearchIcon className='Search-icon' />
        </div>
        <div className='button-div' onClick={Cardkirish}>
          {
            Buttons.map((item,index)=>(
              <button className={category === item ? "bg_have" : ""} key={index} onClick={()=>Choose(item)}>{item}</button>
            ))
          }
        </div>
        <div className='card-kurslar'>
          {
            KursData.map((item, index) => (
              <div className='card-div' key={index} onClick={()=>Cardkirish(item)}>
                <div>
                  <button className='button-dizayn' style={{backgroundColor:item.color}}>{item.id}</button>
                  <h1 className='button-h1'> {item.title}</h1>
                  <p className='button-p'> {item.desc}</p>
                </div>
                <div><img className='card-img' src={item.img} alt="" /></div>
              </div>
              
            ))
          }

         </div>
      </div>
    </div>
  )
}

export default Kurslar