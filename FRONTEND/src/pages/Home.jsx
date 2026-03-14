import React from 'react'
import Title from '../components/Title'
import HeroBanner from '../components/HeroBanner'

const Home = () => {
  return (
    <div className='min-h-dvh flex flex-col items-center'>

      <HeroBanner />

      <Title text1="All" text2="Collections" />

    </div>
  )
}

export default Home