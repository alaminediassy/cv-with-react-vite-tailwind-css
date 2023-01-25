import React from "react";
import {
    AiFillGithub,
    AiFillInstagram, AiFillLinkedin,
    BsFillTelephoneFill,
    HiLocationMarker,
    MdEmail
} from "react-icons/all.js";

const Contact = () => {
  return(
      <div className="flex w-full min-h-screen justify-center items-center">
          <div className="flex flex-col md:flex-row md:space-x-6  space-y-6 md:space-y-0 bg-formColor w-full max-w-4xl
          p-8 sm:p-12 rounded-xl shadow-lg text-white overflow-hidden">

              <div className="flex flex-col space-y-10 justify-between">
                  <div>
                      <h1 className="font-semi-bold text-4xl tracking-wide pb-4">Contactez moi</h1>
                      <p className="pt-2 text-white-100 text-sm">
                          N'hésitez pas à utiliser le formulaire de contact si vous avez des questions.
                      </p>
                  </div>
                  <div className="flex flex-col space-y-6">
                      <div className="inline-flex space-x-4 items-center">
                          <BsFillTelephoneFill className="text-orangeLeger text-l"/>
                          <span>+33 7 58 03 71 52</span>
                      </div>
                      <div className="inline-flex space-x-4 items-center">
                          <MdEmail className="text-orangeLeger text-xl"/>
                          <span>diassy.alamine@gmail.com</span>
                      </div>
                      <div className="inline-flex space-x-4 items-center">
                          <HiLocationMarker className="text-orangeLeger text-xl"/>
                          <span>5, Résidence des Casseaux 91140 Villebon</span>
                      </div>
                  </div>
                  <div className="flex inline-flex space-x-6 text-2xl">
                      <a target="_blank"
                         rel="nofollow noopener noreferrer"
                         href="https://github.com/alaminediassy"
                         className="hover:text-orangeLeger ">
                          <AiFillGithub/>
                      </a>
                      <a target="_blank"
                         rel="nofollow noopener noreferrer"
                         className="hover:text-orangeLeger"
                         href="https://www.linkedin.com/in/mamadou-lamine-diassy-0946b31a6/">
                          <AiFillLinkedin/>
                      </a>
                      <a target="_blank"
                         rel="nofollow noopener noreferrer"
                         className="hover:text-orangeLeger"
                         href="https://www.instagram.com/alamine_graphix/">
                          <AiFillInstagram/>
                      </a>
                  </div>

              </div>
              <div className="relative">
                  <div className="absolute z-0 w-40 h-40 bg-orangeLeger rounded-full -right-28 -top-28"></div>
                  <div className="absolute z-0 w-40 h-40 bg-orangeLeger rounded-full -left-28 -bottom-16"></div>
                  <div className="relative z-10 bg-white rounded-xl shadow-lg p-8 text-gray-600 ">
                      <form className="flex flex-col space-y-4">
                          <div>
                              <label htmlFor="" className="text-sm">Votre nom complet</label>
                              <input
                                  type="text"
                                  placeholder="votre nom"
                                  className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2
                                  focus:ring-orangeLeger mt-2"/>
                          </div>
                          <div>
                              <label htmlFor="" className="text-sm">Adresse email</label>
                              <input
                                  type="text"
                                  placeholder="Votre email"
                                  className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2
                                  focus:ring-orangeLeger mt-2"/>
                          </div>
                          <div>
                              <label htmlFor="" className="text-sm">Message</label>
                              <textarea
                                  type="text"
                                  placeholder="Votre message"
                                  rows="4"
                                  className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2
                                  focus:ring-orangeLeger mt-2"/><textarea/>
                          </div>
                          <button className="inline-block self-end bg-formColor text-white font-semi-bold rounded-lg
                          px-6 py-2 uppercase text-sm hover:bg-orangeLeger hover:text-formColor">Soumettre</button>
                      </form>
                  </div>
              </div>
          </div>

      </div>
  )
}

export default Contact;