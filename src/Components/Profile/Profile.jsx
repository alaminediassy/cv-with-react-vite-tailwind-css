import React, {useState} from "react";
import alamine from "../../Assets/alamine.png"
import {AiFillInstagram, AiFillLinkedin, BsGithub} from "react-icons/all.js";


const Profile = () =>{


    return(
        <div className="profileDiv grid p-[.5rem]">


            <div className="flex flex-col items-center justify-center">

                <div className="flex gap-32 items-center pb-8 ">
                    <a href="https://github.com/alaminediassy" target="_blank" rel="nofollow noopener noreferrer">
                        <BsGithub className="text-[32px] icon"/>
                    </a>
                    <a href="https://www.linkedin.com/in/mamadou-lamine-diassy-0946b31a6/" target="_blank" rel="nofollow noopener noreferrer">
                        <AiFillLinkedin className="text-[35px] icon"/>
                    </a>
                    <a href="https://www.instagram.com/alamine_graphix/" target="_blank" rel="nofollow noopener noreferrer">
                        <AiFillInstagram className="text-[37px] icon"/>
                    </a>
                </div>

                    <img src={alamine} alt="" className="w-1/5 mb-4 cursor-pointer"/>

                <h2 className="text-center text-textColor text-lg font-medium">
                    Junior Software Developer & UI/UX Designer
                </h2>
            </div>

            <div className="profileDiv grid bg-greyIsh rounded-[10px] p-[1rem] mt-8">
                <p className="text-[16px] text-[#3D3D3D] overflow-auto scrollbar-auto">
                    Je suis étudiant en responsable de projet et je suis passionné par le développement front-end et le
                    design UX/UI. Je suis actuellement en train d'apprendre et de monter en compétences en React JS et
                    je suis à la recherche d'un stage en développement front-end React JS pour compléter ma formation.
                </p>
            </div>

        </div>
    )
}

export default Profile