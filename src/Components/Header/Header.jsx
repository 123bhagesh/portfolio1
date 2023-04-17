import React from "react";
import "./header.css";
// import CTA from "./CTA";
import ME from "../../assets/Bhagesh_Photo.jpg";
import Navbar from "../Navbar/Navbar";
// import HeaderSocial from "./HeaderSocial";

const Header = () => {
  return (
    <div id="#" className="header">
      <header>
        <div className="header_container">
          <center>
            <h3>Hello I'm</h3>
            <h1>Bhagesh Madavi</h1>
            <img
              className="developerName"
              src="https://readme-typing-svg.herokuapp.com?&font=IBM+Plex+Sans&color=abcdei&size=25&lines=Frontend+Web+Developer"
            />
            {/* </div> */}
            {/* <h4 className="text-light">Full-Stack Web Developer</h4> */}
            <div className="me">
              <img src={ME} alt="Me" />
            </div>
          </center>
          {/* <CTA /> */}
          <div className="top-portion">
            <div></div>
            <div className="about">
              <p>I am a Frontend Web Developer with a hands-on Javascript.</p>
              <p>
                Analysis | development | Implementation of responsive web
                interfaces using javascript react.js.
              </p>
            </div>
            <div className="cta">
              <a
                href="https://drive.google.com/file/d/1vcE3ji5Olc3bFHvEfoDvBWtn-SoDV9zV/view?usp=sharing"
                target="_blank"
                className="btn"
              >
                Download Resume
              </a>
              <a href="#contact" className="btn btn-primary">
                Let's Talk
              </a>
            </div>
          </div>
          {/* <HeaderSocial /> */}

          {/* <a href="#contact" className="scroll__down">Scroll Down</a> */}
        </div>
      </header>
      {/* <div className="navbar-external">
        <Navbar />
      </div> */}
    </div>
  );
};

export default Header;
