import React from 'react'
import Logo from './Logo'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'
import NavbarLinks from './NavbarLinks'

const Navbar = () => {
  return (
      <div className='w-full sticky top-0 flex items-center justify-between border-b border-zinc-900/20 py-3 sm:py-4 px-[6vw] sm:px-12 md:px-18 z-10 bg-background'>
        <Logo />
        <NavbarLinks />
         <div className='flex items-center gap-[max(20px,4vw)] sm:gap-[max(20px,2.5vw)] '>
            <img className='w-[max(16px,1.3vw)] cursor-pointer' src={assets.search_icon} alt="" />
            <img className='w-[max(16px,1.3vw)] cursor-pointer' src={assets.profile_icon} alt="" />
            <img className='w-[max(16px,1.3vw)] cursor-pointer' src={assets.cart_icon} alt="" />
            <img className='w-[max(16px,1.3vw)] cursor-pointer sm:hidden' src={assets.menu_icon} alt="" />
            <div className='h-8 w-16 grid place-items-center bg-black text-white rounded-full'>
                <h1 className='font-light'>Login</h1>
            </div>
        </div>
      </div>
  )
}

export default Navbar