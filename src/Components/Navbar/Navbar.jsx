import React, { useState } from "react";
import "./navbar.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageDetail } from "react-icons/bi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("#");
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
      </nav>
    </div>
  );
};

export default Navbar;
