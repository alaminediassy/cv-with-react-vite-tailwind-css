import React from 'react'
import {Link, NavLink} from "react-router-dom";


const NavBar = () => {
  return (
      <div>
        <div className='navBar flex justify-between items-center p-[3rem]'>

            <div className="logoDiv">
                <Link to="/">
                    <h1 className="logo text-[25px] text-orangeColor cursor-pointer"><strong>Curriculum</strong>-Vitae</h1>
                </Link>
            </div>

            <div className="menu flex gap-8">
                <NavLink to="/Projets" className={({isActive}) =>{
                    return isActive ? "activeLink" : "text-[#6f6f6f]"
                }}>
                    <li className="menuList hover:text-orangeColor">Projets</li>
                </NavLink>
                <NavLink to="/Experiences" className={({isActive}) =>{
                    return isActive ? "activeLink" : "text-[#6f6f6f]"
                }}>
                    <li className="menuList hover:text-orangeColor">Expériences</li>
                </NavLink>
                <NavLink to="/Formation" className={({isActive}) =>{
                    return isActive ? "activeLink" : "text-[#6f6f6f]"
                }}>
                    <li className="menuList hover:text-orangeColor">Formation</li>
                </NavLink>
                <NavLink to="/Contact" className={({isActive}) =>{
                    return isActive ? "activeLink" : "text-[#6f6f6f]"
                }}>
                    <li className="menuList hover:text-orangeColor">Contact</li>
                </NavLink>
            </div>
        </div>

      </div>
  )
}

export default NavBar