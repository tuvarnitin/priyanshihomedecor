import React from 'react'
import { NavLink } from 'react-router-dom'

const NavbarLinks = () => {
  return (
   <div className='items-center gap-[2vw] hidden sm:flex text-[max(13px,1.1vw)]'>
               <NavLink to={"/"}>Home</NavLink>
               <NavLink to={"/collections"}>Collections</NavLink>
               <NavLink to={"about-us"}>About Us</NavLink>
               <NavLink to={"/contact-us"}>Contact Us</NavLink>
           </div>
  )
}

export default NavbarLinks