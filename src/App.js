import Header from "./Components/Header/Header.jsx"
import Skills from "./Components/Skills/Skills.jsx"
import Projects from "./Components/Projects/Projects.jsx"
import Contact from "./Components/Contact/Contact.jsx"
import React,{useState} from 'react'
// import "./Components/Navbar/navbar.css"

import Navbar from "./Components/Navbar/Navbar.jsx"
import { Github } from "./Components/Github/Github.jsx"
import About from "./Components/About/About.jsx"
function App() {
  const [activeNav, setActiveNav] =useState("#")


  return (
    <div className="App">
      <Navbar/>
       <Header/>
       <About/>
      <Skills/>
      <Projects/>
      <Github/>
      <Contact/>
    </div>
  );
}

export default App;