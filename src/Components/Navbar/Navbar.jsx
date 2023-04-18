import React, { useState } from "react";
import "./navbar.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageDetail } from "react-icons/bi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import resumeFile from "../../assets/BhageshResume.pdf";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("#");

  const handleResume = () => {
    let alink = document.createElement("a");
    alink.href = resumeFile;
    alink.download = "Bhagesh Madavi Resume.pdf";
    alink.click();
    viewResume();
  };

  const viewResume = () => {
    window.open(
      "https://drive.google.com/file/d/1vcE3ji5Olc3bFHvEfoDvBWtn-SoDV9zV/view?usp=sharing"
    );
  };
  return (
    <div className="navbarContainer">
        <nav>
          <a
            href="#"
            onClick={() => setActiveNav("#")}
            className={activeNav === "#" ? "active" : ""}
          >
            Home
          </a>
          <a
            href="#about"
            onClick={() => setActiveNav("#about")}
            className={activeNav === "#about" ? "active" : ""}
          >
            About
          </a>
          <a
            href="#skills"
            onClick={() => setActiveNav("#skills")}
            className={activeNav === "#skills" ? "active" : ""}
          >
            Skills
          </a>
          <a
            href="#projects"
            onClick={() => setActiveNav("#projects")}
            className={activeNav === "#projects" ? "active" : ""}
          >
            Projects
          </a>
          <a
            href="#github"
            onClick={() => setActiveNav("#github")}
            className={activeNav === "#github" ? "active" : ""}
          >
            Github
          </a>

          <a
            href="#contact"
            onClick={() => setActiveNav("#contact")}
            className={activeNav === "#contact" ? "active" : ""}
          >
            Contact
          </a>
          <a
          onClick={handleResume}
          // href="https://drive.google.com/file/d/1vcE3ji5Olc3bFHvEfoDvBWtn-SoDV9zV/view?usp=sharing"
          target="_blank"
          className="btnResume"
        >
          Download Resume
        </a>
        </nav>


    </div>
  );
};

export default Navbar;
