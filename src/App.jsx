import React from 'react'
import Kirish from './Components/Kirish/Kirish.jsx'
import Tarmoqlar from './Components/Tarmoqlar/Tarmoqlar.jsx'
import Yonalishlar from './Components/Yo\'nalishlar/Yonalishlar.jsx'
import Yordam from './Components/Yordam/Yordam.jsx'
import Ish from './Components/Ishjoylari/Ish.jsx'
import Izoxlar from './Components/Izohlar/Izoxlar.jsx'
import Bloglar from './Components/Navbar/Bloglar.jsx'
import Kurslar from './Components/Navbar/Kurslar.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Hero from './Components/Hero/Hero.jsx'
import Malumotlar from './Components/Malumotlar/Malumotlar.jsx'
import Royxat from './Components/Login/Royxat.jsx'
import Detail from './Components/Detail/Detail.jsx'
import Cardkirish from './Components/Cardkirish/Cardkirish.jsx'

function Home(params) {
  return (
    <>
    <Hero />
    <Tarmoqlar />
      <Yonalishlar />
      <Ish />
      <Izoxlar />
      <Yordam />
      
    </>
  )
}

const App = () => {
  return (
    <div>
      <BrowserRouter>
        {/* <Navbar /> */}
      <Kirish />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Kurslar' element={<Kurslar />} />
          <Route path='/Bloglar' element={<Bloglar />} />
          <Route path='/Royhat' element={<Royxat />} />
          <Route path='/watch' element={<Detail/>} />
          <Route path='/kurs' element={<Cardkirish/>} />

        </Routes>
        <Malumotlar />
      </BrowserRouter>
      

    </div>
  )
}

export default App