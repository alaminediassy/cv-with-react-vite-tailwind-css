import React from "react";
import NavBar from "./Components/Navbar/NavBar";
import Search from "./Components/SearchDiv/Search"
import Jobs from "./Components/JobDiv/Job.jsx";
import Value from "./Components/ValueDiv/Value.jsx";
import Footer from "./Components/FooterDiv/Footer.jsx";


const App = () => {
  return(
      <div className="w-[85%] m-auto bg-white">
          <NavBar/>
          <Search/>
          <Jobs/>
          <Value/>
          <Footer/>
      </div>
  )
}

export default App;