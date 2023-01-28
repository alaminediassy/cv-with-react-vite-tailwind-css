import React, {useState} from "react";

import {
    AiFillInstagram,
    AiFillLinkedin,
    BsGithub,
    BsMoonStarsFill,
    IoDocumentAttachOutline,
    TbCertificate2
} from "react-icons/all.js";
import alamine from "../../Assets/alamine.png";
import {Link, NavLink} from "react-router-dom";
import Alam from "../../Assets/Alam.jpg"

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
                      <li className="hover:text-orangeColor dark:text-white">Services</li>
                  </NavLink>
                  <NavLink to="/Portfolio" className={({isActive}) =>{
                      return isActive ? "activeLink" : "text-[#6f6f6f]"
                  }}>
                      <li className="hover:text-orangeColor dark:text-white">Portfolio</li>
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

                  <h2 className="text-center text-textColor text-xl font-bold dark:text-white">
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
              <div className="justify-center items-center pt-8">
                  <h1 className="text-textColor text-[38px] font-medium text-center dark:text-white">
                      About Me
                  </h1>
                  <p className="text-center text-textColor dark:text-white">Un petit résume</p>
              </div>

              <div className="grid grid-cols-2 pt-20">
                  <div className="col-span-1 mx-auto my-auto">
                      <img src={Alam} className="rounded-3xl justify-center shadow-xl"/>
                  </div>

                  <div className="col-span-1 bg-white p-8 rounded-3xl shadow-xl">
                      <div className="flex justify-center items-center space-x-10">
                          <div className="bg-white text-center items-align-center shadow-lg py-8 px-6 rounded-xl leading-8">
                              <TbCertificate2 className='text-center mx-auto'/>
                              <h3 className="">Experiences</h3>
                              <span className="">+ 2 ans</span>
                          </div>
                          <div className="bg-white text-center items-align-center shadow-lg py-8 px-6 rounded-xl leading-8">
                              <TbCertificate2 className='text-center mx-auto'/>
                              <h3 className="">Experiences</h3>
                              <span className="">+ 2 ans</span>
                          </div>
                          <div className="bg-white text-center items-align-center shadow-lg py-8 px-6 rounded-xl leading-8">
                              <TbCertificate2 className='text-center mx-auto'/>
                              <h3 className="">Experiences</h3>
                              <span className="">+ 2 ans</span>
                          </div>
                      </div>
                      <div className="pt-[5rem] px-3 leading-7">
                          <p>
                              Il est important de noter que la classe relative permet de définir une position relative
                              pour l'icône, ce qui est nécessaire pour utiliser la propriété z-index pour superposer
                              l'icône par rapport aux autres éléments de la div.
                          </p>
                      </div>
                      <div className="flex pt-[5rem] px-3">
                          <a className="flex items-center gap-3 bg-orangeColor px-4 py-2 rounded-lg text-white" href="">Télécherger CV
                              <IoDocumentAttachOutline/>
                          </a>

                      </div>
                  </div>

              </div>
          </section>
      </div>
      </div>
  )
}

export default Home