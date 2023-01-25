import React from "react";
import {useNavigate} from "react-router-dom";

const navigate = useNavigate()
const goHome = () => {
  navigate("/")
}

const NotFound = () => {
  return(
      <div>
          <h1>
              Désolé cette page n'existe pas !
          </h1>
          <button onClick={goHome} className="bg-orangeColor justify-center items-center py-8 p-3">
              Retour à l'accueil
          </button>
      </div>
  )
}
export default NotFound