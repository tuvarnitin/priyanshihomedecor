import React from 'react'
import Title from '../components/Title'
import Hero from '../components/Hero'
import ProductCard from '../components/ProductCard'
import ProductPanel from '../components/ProductPanel'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='min-h-dvh w-full'>
      <Hero />
      <ProductPanel />
    </div>
  )
}

export default Home