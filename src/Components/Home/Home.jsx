import React, {useState} from "react";
import About from "../About/About.jsx";

// react download fil bibliothèque
import fileDownload from "react-file-download";

import {
    AiFillInstagram,
    AiFillLinkedin, BiSupport,
    BsGithub,
    BsMoonStarsFill, HiBadgeCheck,
    IoDocumentAttachOutline, MdOutlineWorkOutline,
    TbCertificate2
} from "react-icons/all.js";
import alamine from "../../Assets/alamine.png";
import {Link, NavLink} from "react-router-dom";
import Alam from "../../Assets/Alam.jpg"
import laptopAlam from "../../Assets/laptopAlam.png"

const Home = () => {

    const handleDownload = () => {
        fileDownload("../../../public/cvLamine.pdf", "cvLamine.pdf")
    }

    const [darkMode, setDarkMode] = useState(false);


  return(

      <div className={darkMode ? 'dark' : ""}>

          <!-- navigation bar section -->

      <div className="dark:bg-gray-900">

          <div className='flex justify-between items-center p-[3rem]'>

              <div className="logoDiv">
                  <Link to="/">
                      <h1 className="logo text-[25px] text-orangeColor cursor-pointer dark:text-white"><strong>Alamine</strong> Graphix</h1>
                  </Link>
              </div>

              <div className="flex items-center gap-8 text-textColor">
                  <NavLink to="/Home" className={({isActive}) =>{
                      return isActive ? "activeLink" : "text-[#6f6f6f]"
                  }}>
                      <li className="menuList hover:text-orangeColor dark:text-white">Accueil</li>
                  </NavLink>

                  <a href="#section2" className="">
                      <li className="text-[#6f6f6f] hover:text-orangeColor dark:text-white">A Propos</li>
                  </a>

                  <a href="#section3">
                      <li className="text-[#6f6f6f] hover:text-orangeColor dark:text-white">Compétences</li>
                  </a>

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

          <!-- Profile Section -->

          <section  className="p-[3rem]" id="section1">

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

          <!-- About Section -->

          <section className="p-[3rem] pb-10" id="section2">
              <div className="justify-center items-center pb-8">
                  <h1 className="text-textColor text-[32px] font-medium text-center dark:text-white">
                      A propos de Moi
                  </h1>
                  <p className="text-center text-[#6f6f6f] dark:text-white">Un petit résume</p>
              </div>

              <div className="grid grid-cols-2 pt-10 mx-auto my-auto">
                  <div className="col-span-1 mx-auto my-auto">
                      <img src={laptopAlam} className="mx-auto my-auto w-4/5"/>
                  </div>

                  <div className="col-span-1 bg-white p-8 rounded-3xl shadow-xl ">
                      <div className="flex justify-center items-center space-x-8">
                          <div className="bg-white w-[180px] text-center items-align-center shadow-lg py-6 px-4 rounded-xl leading-8">
                              <TbCertificate2 className='text-center text-xl mx-auto'/>
                              <h3 className="pt-3">Experiences</h3>
                              <span className="text-[12px] text-[#878484]">+ 2 ans</span>
                          </div>
                          <div className="bg-white w-[180px] text-center items-align-center shadow-lg py-6 px-4 rounded-xl leading-8">
                              <MdOutlineWorkOutline className='text-center text-xl mx-auto'/>
                              <h3 className="pt-3">Projets</h3>
                              <span className="text-[12px] text-[#878484]">+15 projets</span>
                          </div>
                          <div className="bg-white w-[180px] text-center items-align-center shadow-lg py-6 px-4 rounded-xl leading-8">
                              <BiSupport className='text-center text-xl mx-auto'/>
                              <h3 className="pt-3">Disponibilté</h3>
                              <span className="text-[12px] text-[#878484]">24h/24 - 7j/7</span>
                          </div>
                      </div>
                      <div className="pt-[3rem] px-3 leading-7 text-justify">
                          <p className="text-textColor text-sm leading-6">
                              Je suis développeur junior front-end et designer UI/UX passionné par la création et
                              l'innovation. Je suis capable de créer des interfaces utilisateur attrayantes et
                              fonctionnelles.
                              Je suis convaincu que ma motivation et mes compétences sont de la valeur ajoutée à
                              tout projet.
                          </p>
                      </div>
                      <div className="flex pt-[3rem] px-3">
                          <button onClick={handleDownload} className="flex items-center gap-3 bg-orangeColor px-4 py-3 rounded-xl text-white">
                              Télécharger mon CV
                              <IoDocumentAttachOutline/>
                          </button>
                      </div>
                  </div>

              </div>
          </section>

          <!-- Skills Section -->

          <section className="p-[3rem] pb-10" id="section3">
              <div className="justify-center items-center pb-12 pt-12">
                  <h1 className="text-textColor text-[32px] font-medium text-center dark:text-white">
                      Compétences
                  </h1>
                  <p className="text-center text-[#6f6f6f] dark:text-white pb-6">Mes Compétences techniques</p>
              </div>

              <div className="grid grid-cols-2 mx-auto my-auto pb-14">

                  <div className="bg-white w-[450px] h-[350px] mx-auto my-auto rounded-3xl shadow-xl justify-center
                  items-center">
                      <h1 className="text-center pt-12 text-textColor font-medium">Développement Front-End</h1>
                      <div className="flex gap-20 justify-center pt-8">
                          <div>
                              <div className="flex gap-3 pt-4">
                                  <HiBadgeCheck className="pt-1/2 text-xl"/>
                                  <div className="">
                                      <h3>HTML</h3>
                                      <span className="text-[13px] text-[#878484]">Base</span>
                                  </div>
                              </div>
                              <div className="flex gap-3 pt-4">
                                  <HiBadgeCheck className="pt-1/2 text-xl"/>
                                  <div className="">
                                      <h3>CSS</h3>
                                      <span className="text-[13px] text-[#878484]">Avancé</span>
                                  </div>
                              </div>
                              <div className="flex gap-3 pt-4">
                                  <HiBadgeCheck className="pt-1/2 text-xl"/>
                                  <div className="">
                                      <h3>Javascript</h3>
                                      <span className="text-[13px] text-[#878484]">Intermédiaire</span>
                                  </div>
                              </div>
                          </div>
                          <div>
                              <div className="flex gap-3 pt-4">
                                  <HiBadgeCheck className="pt-1/2 text-xl"/>
                                  <div className="">
                                      <h3>Tailwind CSS</h3>
                                      <span className="text-[13px] text-[#878484]">Intermédiaire</span>
                                  </div>
                              </div>
                              <div className="flex gap-3 pt-4">
                                  <HiBadgeCheck className="pt-1/2 text-xl"/>
                                  <div className="">
                                      <h3>Git</h3>
                                      <span className="text-[13px] text-[#878484]">Intermédiaire</span>
                                  </div>
                              </div>
                              <div className="flex gap-3 pt-4">
                                  <HiBadgeCheck className="pt-1/2 text-xl"/>
                                  <div className="">
                                      <h3>React JS</h3>
                                      <span className="text-[13px] text-[#878484]">Intermédiaire</span>
                                  </div>
                              </div>
                          </div>
                      </div>

                  </div>


                  <div className="bg-white w-[450px] h-[350px] mx-auto my-auto rounded-3xl shadow-xl justify-center
                  items-center">
                      <h1 className="text-center pt-12 text-textColor font-medium">Développement Back-End</h1>
                      <div className="flex gap-20 justify-center pt-8">
                          <div>
                              <div className="flex gap-3 pt-4">
                                  <HiBadgeCheck className="pt-1/2 text-xl"/>
                                  <div className="">
                                      <h3>Java</h3>
                                      <span className="text-[13px] text-[#878484]">Base</span>
                                  </div>
                              </div>
                              <div className="flex gap-3 pt-4">
                                  <HiBadgeCheck className="pt-1/2 text-xl"/>
                                  <div className="">
                                      <h3>PHP</h3>
                                      <span className="text-[13px] text-[#878484]">intermédiare</span>
                                  </div>
                              </div>
                              <div className="flex gap-3 pt-4">
                                  <HiBadgeCheck className="pt-1/2 text-xl"/>
                                  <div className="">
                                      <h3>Python</h3>
                                      <span className="text-[13px] text-[#878484]">débutant</span>
                                  </div>
                              </div>
                          </div>
                          <div>
                              <div className="flex gap-3 pt-4">
                                  <HiBadgeCheck className="pt-1/2 text-xl"/>
                                  <div className="">
                                      <h3>MySQL</h3>
                                      <span className="text-[13px] text-[#878484]">Intermédiaire</span>
                                  </div>
                              </div>
                              <div className="flex gap-3 pt-4">
                                  <HiBadgeCheck className="pt-1/2 text-xl"/>
                                  <div className="">
                                      <h3>Spring Boot</h3>
                                      <span className="text-[13px] text-[#878484]">Débutant</span>
                                  </div>
                              </div>
                              <div className="flex gap-3 pt-4">
                                  <HiBadgeCheck className="pt-1/2 text-xl"/>
                                  <div className="">
                                      <h3>SQL</h3>
                                      <span className="text-[13px] text-[#878484]">Débutant</span>
                                  </div>
                              </div>
                          </div>
                      </div>

                  </div>

              </div>
          </section>

          <!-- Services Section -->

      </div>
      </div>
  )
}

export default Home