import React from 'react'
import { assets } from './assets/assets'
import Title from './components/Title'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Collections from './pages/Collections'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='min-h-dvh bg-background'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/collections' element={<Collections />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/contact-us' element={<ContactUs />} />
      </Routes>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default App