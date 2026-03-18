import React from 'react'
import Title from '../components/Title'
import Hero from '../components/Hero'
import ProductCard from '../components/ProductCard'
import ProductPanel from '../components/ProductPanel'

const Home = () => {
  return (
    <div className='min-h-dvh w-full grid place-items-center'>
      <Hero />
      <ProductPanel />
    </div>
  )
}

export default Home