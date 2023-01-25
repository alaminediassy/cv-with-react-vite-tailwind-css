import React from "react";
import Experiences from "../Experiences/Experiences.jsx";
import Education from "../Education/Education.jsx";
import Profile from "../Profile/Profile.jsx";

const Home = () => {
  return(
      <div>
          <Profile/>
          <Experiences/>
          <Education/>
      </div>
  )
}

export default Home