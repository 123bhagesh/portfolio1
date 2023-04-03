import React,{useState} from 'react'
import "./navbar.css"
import {AiOutlineHome} from "react-icons/ai"
import {AiOutlineUser} from "react-icons/ai"
import {BiBook} from "react-icons/bi"
import {RiServiceLine} from "react-icons/ri"
import {BiMessageDetail} from "react-icons/bi"
import {AiOutlineFundProjectionScreen} from "react-icons/ai"

const Navbar = () => {
  const [activeNav, setActiveNav] =useState("#")
  return (
    <nav> 
        <a href="#" onClick={() =>setActiveNav("#")} className={activeNav === "#" ? "active" : ""}><AiOutlineHome/></a>
        <a href="#skills" onClick={()=>setActiveNav("#skills") } className={activeNav === "#skills" ? "active" : ""}><BiBook/></a>
        <a href="#projects" onClick={()=>setActiveNav("#projects")} className={activeNav === "#projects" ? "active" : ""}><AiOutlineFundProjectionScreen/></a>
        {/* <a href="#services" onClick={()=>setActiveNav("#services")} className={activeNav === "#services" ? "active" : ""}><RiServiceLine/></a> */}
        <a href="#contact" onClick={()=>setActiveNav("#contact")} className={activeNav === "#contact" ? "active" : ""}><BiMessageDetail/></a>
    </nav>  
  )
}

export default Navbar