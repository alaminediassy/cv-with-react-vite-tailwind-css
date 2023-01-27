import React from "react";
import {useNavigate} from "react-router-dom";
import {IoMdArrowRoundBack} from "react-icons/all.js";
import error from "../../Assets/error.gif"



const NotFound = () => {

    const navigate = useNavigate()
    const goHome = () => {
        navigate("/")
    }

  return(
      <div className="flex flex-col justify-center items-center">
          <img src={error} className="pb-8 "/>
          <h1 className="text-textColor text-[25px] pb-4 font-medium">
              Oops 🤕
          </h1>
          <span className="pb-8 text-[20px]">
              Cette page n'existe pas !
          </span>
          <button onClick={goHome} className="inline-flex space-x-1 bg-orangeColor rounded-lg px-8 py-3 text-white font-medium  justify-center items-center">
              <IoMdArrowRoundBack/>
              <span>Retour à l'accueil</span>
          </button>
      </div>
  )
}
export default NotFound