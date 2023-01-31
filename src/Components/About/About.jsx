import React from "react";
import laptopAlam from "../../Assets/laptopAlam.png";
import {
    BiBriefcaseAlt,
    BiSupport,
    IoDocumentAttachOutline,
    TbCertificate2
} from "react-icons/all.js";


const About = () => {
  return(
      <div>
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
                              <BiBriefcaseAlt className='text-center text-xl mx-auto'/>
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
      </div>
  )
}

export default About;