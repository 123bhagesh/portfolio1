/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import "./contact.css"
import {AiFillLinkedin} from "react-icons/ai"
import {BsGithub} from "react-icons/bs"
import {IoIosCall} from "react-icons/io"
import {SiGmail} from "react-icons/si"
import {AiOutlineCopyrightCircle} from "react-icons/ai"

const Contact = () => {
  return (
    <div id="contact" className="contect">
        <center>
            <h1>
            Have an <name>idea?</name> <br />
            Get in Touch!
            </h1>
            <br />
            <name>Bhagesh Madavi</name>
            <br />
            <br />
            <div className="contact-info">
                <a target="_blank"  href="https://www.linkedin.com/in/bhagesh-madavi-a3b730219/"><AiFillLinkedin/></a>
                <a target="_blank"  href="https://github.com/123bhagesh"><BsGithub/></a>
            </div>
            <div className="call">
                <IoIosCall/> +91 9158857781         
            </div>
            <div className="mail">
            <SiGmail/> 123bhagesh@gmail.com
            </div>
        </center>
        <footer className="bottom">
            <AiOutlineCopyrightCircle/>2023 Designed and Build by Bhagesh Madavi with ❤️
        </footer>
    </div>
  )
}

export default Contact