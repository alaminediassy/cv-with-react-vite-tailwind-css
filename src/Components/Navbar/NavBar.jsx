import React from 'react'
import {Link, NavLink} from "react-router-dom";
import {BsMoonStarsFill} from "react-icons/all.js";


const NavBar = () => {
  return (

      <div className='flex justify-between items-center p-[3rem]'>

          <div className="logoDiv">
              <Link to="/">
                  <h1 className="logo text-[25px] text-orangeColor cursor-pointer dark:text-white"><strong>Alamine</strong> Graphix</h1>
              </Link>
          </div>

          <div className="flex items-center gap-8">
              <NavLink to="/Home" className={({isActive}) =>{
                  return isActive ? "activeLink" : "text-[#6f6f6f]"
              }}>
                  <li className="menuList hover:text-orangeColor dark:text-white">Home</li>
              </NavLink>
              <NavLink to="/About" className={({isActive}) =>{
                  return isActive ? "activeLink" : "text-[#6f6f6f]"
              }}>
                  <li className="menuList hover:text-orangeColor dark:text-white">About</li>
              </NavLink>
              <NavLink to="/Experiences" className={({isActive}) =>{
                  return isActive ? "activeLink" : "text-[#6f6f6f]"
              }}>
                  <li className="menuList hover:text-orangeColor dark:text-white">Skills</li>
              </NavLink>
              <NavLink to="/Services" className={({isActive}) =>{
                  return isActive ? "activeLink" : "text-[#6f6f6f]"
              }}>
                  <li className="menuList hover:text-orangeColor dark:text-white">Services</li>
              </NavLink>
              <NavLink to="/Portfolio" className={({isActive}) =>{
                  return isActive ? "activeLink" : "text-[#6f6f6f]"
              }}>
                  <li className="menuList hover:text-orangeColor dark:text-white">Portfolio</li>
              </NavLink>

              <BsMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="text-xl dark:text-white icon"/>

              <NavLink to="/Contact" className={({isActive}) =>{
                  return isActive ? "activeLink" : "text-[#6f6f6f]"
              }}>
                  <a className="bg-orangeColor text-white px-4 py-2 rounded-lg"
                     href=""
                  >Contact
                  </a>
              </NavLink>
          </div>

      </div>

  )
}

export default NavBar
