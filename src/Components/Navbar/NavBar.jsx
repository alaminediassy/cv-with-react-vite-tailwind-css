import React from 'react'
import {Link, NavLink} from "react-router-dom";
import {BsMoonStarsFill} from "react-icons/all.js";


const NavBar = () => {
  return (
      <div>
        <div className='navBar flex justify-between items-center p-[3rem]'>

            <div className="logoDiv">
                <Link to="/">
                    <h1 className="logo text-[25px] text-orangeColor cursor-pointer"><strong>Alamine</strong> Graphix</h1>
                </Link>
            </div>

            <div className="menu flex items-center gap-8">
                <NavLink to="/Project" className={({isActive}) =>{
                    return isActive ? "activeLink" : "text-[#6f6f6f]"
                }}>
                    <li className="menuList hover:text-orangeColor">Project</li>
                </NavLink>
                <NavLink to="/Experiences" className={({isActive}) =>{
                    return isActive ? "activeLink" : "text-[#6f6f6f]"
                }}>
                    <li className="menuList hover:text-orangeColor">Expériences</li>
                </NavLink>
                <NavLink to="/Education" className={({isActive}) =>{
                    return isActive ? "activeLink" : "text-[#6f6f6f]"
                }}>
                    <li className="menuList hover:text-orangeColor">Formation</li>
                </NavLink>
                <NavLink to="/Services" className={({isActive}) =>{
                    return isActive ? "activeLink" : "text-[#6f6f6f]"
                }}>
                    <li className="menuList hover:text-orangeColor">Services</li>
                </NavLink>
                <NavLink to="/Contact" className={({isActive}) =>{
                    return isActive ? "activeLink" : "text-[#6f6f6f]"
                }}>
                    <li className="menuList hover:text-orangeColor">Contact</li>
                </NavLink>

                <BsMoonStarsFill className="cursor pointer text-2xl icon"/>
                <a className="bg-orangeColor text-white px-4 py-2 rounded-lg"
                   href=""
                >Resume
                </a>
            </div>
        </div>

      </div>
  )
}

export default NavBar
