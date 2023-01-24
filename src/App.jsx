import React from "react";
import NavBar from "./Components/Navbar/NavBar";

import Footer from "./Components/FooterDiv/Footer.jsx";
import Profile from "./Components/Profile/Profile.jsx";
import Experiences from "./Components/Experiences/Experiences.jsx";
import Education from "./Components/Education/Education.jsx";


const App = () => {
  return(
      <div className="w-[85%] m-auto bg-white">
          <NavBar/>
          <Profile/>
          <Footer/>
          <Experiences/>
          <Education/>
      </div>
  )
}

export default App;