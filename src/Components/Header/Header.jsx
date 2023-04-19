import React from "react";
import "./header.css";
// import CTA from "./CTA";
import ME from "../../assets/Bhagesh_Photo.jpg";
import Navbar from "../Navbar/Navbar";
import resumeFile from "../../assets/BhageshResume.pdf";
// import HeaderSocial from "./HeaderSocial";
import Typewriter from "typewriter-effect";

const handleResume = () => {
  let alink = document.createElement("a");
  alink.href = resumeFile;
  alink.download = "Bhagesh Madavi Resume.pdf";
  alink.click();
  viewResume();
};
// let resumeLink=  "https://drive.google.com/file/d/1vcE3ji5Olc3bFHvEfoDvBWtn-SoDV9zV/view?usp=sharing";

// const downloadAndOpenResume = () => {
//   let downloadLink = document.createElement("a");
//   downloadLink.href =
//     "https://drive.google.com/file/d/1vcE3ji5Olc3bFHvEfoDvBWtn-SoDV9zV/view?usp=sharing";
//   downloadLink.download = "Anshul_Resume.pdf";
//   document.body.appendChild(resume);
//   downloadLink.click();
//   // viewResume();
//   document.body.removeChild(downloadLink);
// };
const viewResume = () => {
  window.open(
    "https://drive.google.com/file/d/1vcE3ji5Olc3bFHvEfoDvBWtn-SoDV9zV/view?usp=sharing"
  );
};

const Header = () => {
  return (
    <div id="#" className="header">
      <header>
        <div className="header_container">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <h3>Hello I'm</h3>
            <h1>Bhagesh Madavi</h1>
            <div className="typeAnimation">
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 40,
                  strings: [
                    "Software Developer...",
                    "Frontend Web Developer...",
                  ],
                }}
              />
            </div>

            <div className="me">
              <img src={ME} alt="Me" />
            </div>
          </div>
          <div className="top-portion">
            <div className="about">
              <p>I am a Frontend Web Developer with a hands-on Javascript.</p>
              <p>
                Analysis | development | Implementation of responsive web
                interfaces using javascript react.js.
              </p>
            </div>
            <div className="cta">
              <a
                onClick={handleResume}
                // href="https://drive.google.com/file/d/1vcE3ji5Olc3bFHvEfoDvBWtn-SoDV9zV/view?usp=sharing"
                target="_blank"
                className="btn"
              >
                Resume
              </a>

              <a href="#contact" className="btn btn-primary">
                Let's Talk
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
