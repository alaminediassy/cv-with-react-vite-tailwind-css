import React, {useState} from "react";

import {AiFillInstagram, AiFillLinkedin, BsGithub, BsMoonStarsFill} from "react-icons/all.js";
import alamine from "../../Assets/alamine.png";
import {Link, NavLink} from "react-router-dom";

const Home = () => {

    const [darkMode, setDarkMode] = useState(false);
  return(
      <div className={darkMode ? 'dark' : ""}>

      <div className="dark:bg-gray-900">

          <div className='flex justify-between items-center p-[3rem]'>

              <div className="logoDiv">
                  <Link to="/">
                      <h1 className="logo text-[25px] text-orangeColor cursor-pointer dark:text-white"><strong>Alamine</strong> Graphix</h1>
                  </Link>
              </div>

              <div className="flex items-center gap-8">
                  <NavLink to="/Project" className={({isActive}) =>{
                      return isActive ? "activeLink" : "text-[#6f6f6f]"
                  }}>
                      <li className="menuList hover:text-orangeColor dark:text-white">Project</li>
                  </NavLink>
                  <NavLink to="/Experiences" className={({isActive}) =>{
                      return isActive ? "activeLink" : "text-[#6f6f6f]"
                  }}>
                      <li className="menuList hover:text-orangeColor dark:text-white">Expériences</li>
                  </NavLink>
                  <NavLink to="/Education" className={({isActive}) =>{
                      return isActive ? "activeLink" : "text-[#6f6f6f]"
                  }}>
                      <li className="menuList hover:text-orangeColor dark:text-white">Formation</li>
                  </NavLink>
                  <NavLink to="/Services" className={({isActive}) =>{
                      return isActive ? "activeLink" : "text-[#6f6f6f]"
                  }}>
                      <li className="menuList hover:text-orangeColor dark:text-white">Services</li>
                  </NavLink>
                  <NavLink to="/Contact" className={({isActive}) =>{
                      return isActive ? "activeLink" : "text-[#6f6f6f]"
                  }}>
                      <li className="menuList hover:text-orangeColor dark:text-white">Contact</li>
                  </NavLink>

                  <BsMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="text-xl dark:text-white icon"/>
                  <a className="bg-orangeColor text-white px-4 py-2 rounded-lg"
                     href=""
                  >Resume
                  </a>
              </div>
          </div>


          <section  className="p-[3rem]">

              <div className="flex flex-col items-center justify-center">
                  <div className="flex gap-32 items-center pb-8 ">
                      <a href="https://github.com/alaminediassy" target="_blank" rel="nofollow noopener noreferrer">
                          <BsGithub className="text-[32px] icon dark:text-white"/>
                      </a>
                      <a href="https://www.linkedin.com/in/mamadou-lamine-diassy-0946b31a6/" target="_blank" rel="nofollow noopener noreferrer">
                          <AiFillLinkedin className="text-[35px] icon dark:text-white"/>
                      </a>
                      <a href="https://www.instagram.com/alamine_graphix/" target="_blank" rel="nofollow noopener noreferrer">
                          <AiFillInstagram className="text-[37px] icon dark:text-white"/>
                      </a>
                  </div>
                  <img src={alamine} alt="" className="w-1/5 mb-7 cursor-pointer"/>

                  <h2 className="text-center text-textColor text-xl font-medium dark:text-white">
                      Jr. Front-End Developer & UI/UX Designer
                  </h2>

              </div>

              <div className="text-center text-sm mt-4">
                  <p className="text-[16px] text-[#3D3D3D] leading-6 dark:text-white">
                      Etudiant en Responsable de Projet Informatique je suis à la recherche de stage en <br/> Développement
                      Front-End je suis aussi ouvert pour <br/>des postes en UI et UX Design.
                  </p>
              </div>
          </section>
          <section className="p-[3rem]">
              <div>
                  <h3>
                      Services offerts
                  </h3>
              </div>
          </section>
      </div>
      </div>
  )
}

export default Home