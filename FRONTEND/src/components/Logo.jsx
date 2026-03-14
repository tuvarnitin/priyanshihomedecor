import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
      <Link to={"/"} className='flex gap-1 items-center cursor-pointer'>
          <img src={assets.logo} className='w-[max(30px,3vw)] h-[max(30px,3vw)]' />
          <div className='flex flex-col items-center justify-center gap-1 font-[prata]'>
              <h1 className='outfit-bold text-[max(12px,1.2vw)] font-semibold leading-[max(12px,1.2vw)] tracking-widest'>Priyanshi</h1>
              <h4 className='outfit-light text-[max(8px,.8vw)] leading-[max(8px,.8vw)] font-light'>Home Decor</h4>
          </div>
      </Link>
  )
}

export default Logo