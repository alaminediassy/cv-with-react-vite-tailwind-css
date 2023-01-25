import React from "react";
import NavBar from "./Components/Navbar/NavBar";
import Experiences from "./Components/Experiences/Experiences.jsx";
import Education from "./Components/Education/Education.jsx";
import Contact from "./Components/Contact/Contact.jsx";

// Import react rooter
import {Routes, Route} from "react-router-dom";
import Home from "./Components/Home/Home.jsx";


const App = () => {
  return(
          <div className="w-[85%] m-auto bg-white">
              <NavBar/>
              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/Experience" element={<Experiences/>}/>
                  <Route path="/Education" element={<Education/>}/>
                  <Route path="/Contact" element={<Contact/>}/>
              </Routes>
          </div>

  )
}

export default App;