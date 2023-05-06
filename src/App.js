import Header from "./Components/Header/Header.jsx"
import Skills from "./Components/Skills/Skills.jsx"
import Projects from "./Components/Projects/Projects.jsx"
import Contact from "./Components/Contact/Contact.jsx"
import React,{useState} from 'react'
import Navbar from "./Components/Navbar/Navbar.jsx"
import { Github } from "./Components/Github/Github.jsx"
import Education from "./Components/About/Education.jsx"
function App() {
  const [activeNav, setActiveNav] =useState("#")

  return (
    <div className="App">
      <Navbar/>
       <Header/>
       <Education/>
      <Skills/>
      <Projects/>
      <Github/>
      <Contact/>
    </div>
  );
}

export default App;