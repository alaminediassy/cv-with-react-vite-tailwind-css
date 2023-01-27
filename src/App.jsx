import React from "react";
import NavBar from "./Components/Navbar/NavBar";
import Experiences from "./Components/Experiences/Experiences.jsx";
import Education from "./Components/Education/Education.jsx";
import Contact from "./Components/Contact/Contact.jsx";

// Import react rooter
import {Routes, Route} from "react-router-dom";
import Home from "./Components/Home/Home.jsx";
import Project from "./Components/Project/Project.jsx";
import NotFound from "./Components/NotFound/NotFound.jsx";


const App = () => {
  return(
          <div className="m-auto bg-white">
              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/Experiences" element={<Experiences/>}/>
                  <Route path="/Education" element={<Education/>}/>
                  <Route path="/Contact" element={<Contact/>}/>
                  <Route path="/Project" element={<Project/>}/>
                  <Route path="*" element={<NotFound/>}/>
              </Routes>
          </div>

  )
}

export default App;