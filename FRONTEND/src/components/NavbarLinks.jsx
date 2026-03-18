import React from 'react'
import { NavLink } from 'react-router-dom'

const NavbarLinks = () => {
  return (
   <div className='items-center gap-[2vw] hidden sm:flex text-responsive-small'>
               <NavLink to={"/"}>HOME</NavLink>
               <NavLink to={"/collections"}>COLLECTIONS</NavLink>
               <NavLink to={"about-us"}>ABOUT US</NavLink>
               <NavLink to={"/contact-us"}>CONTACT US</NavLink>
           </div>
  )
}

export default NavbarLinks