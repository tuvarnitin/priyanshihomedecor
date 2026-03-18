import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
      <Link to={"/"} className='flex gap-1 items-center cursor-pointer'>
          <img src={assets.logo} className='w-[max(30px,3vw)] h-[max(30px,3vw)]' />
          <div className='flex flex-col items-center justify-center gap-1 font-playfair'>
              <h1 className='text-responsive-medium font-semibold leading-responsive-medium tracking-widest'>Priyanshi</h1>
              <h4 className='text-responsive-xsmall leading-responsive-xsmall font-light'>Home Decor</h4>
          </div>
      </Link>
  )
}

export default Logo