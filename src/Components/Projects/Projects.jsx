/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./projects.css";
import { GrDeploy } from "react-icons/gr";
import { BsRocketTakeoff } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import rodan from "../../assets/rodanFild.png";
import buywow from "../../assets/buywow.png";
import indeed from "../../assets/indeed.png";
import asos from "../../assets/asos.png";
import dnaIndia from "../../assets/dnaIndia.png";
import masaiLearn from "../../assets/landingmasailearn.PNG";
import aimeeDash from "../../assets/aimeeDash.png";

// import appleTV from "../../assets/Apple-tv.png"

const Projects = () => {
  return (
    <div id="projects" className="project">
      <center>
        <h1>Projects</h1>
      </center>
      {/* Sixth Project */}
      <div className="inner-project">
        <div className="project-video">
          <img src={aimeeDash} alt="Aimee Project" />
          <div className="project-tools">
            <a
              target="_blank"
              href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/1216/1216733.png"
                alt="HTML"
              />
              <h2>HTML</h2>
            </a>
            <a
              target="_blank"
              href="https://developer.mozilla.org/en-US/docs/Web/CSS"
            >
              <img
                src="https://w7.pngwing.com/pngs/454/464/png-transparent-css3-cascading-style-sheets-logo-html-markup-language-others-miscellaneous-blue-angle-thumbnail.png"
                alt="CSS"
              />
              <h2>CSS</h2>
            </a>
            <a
              target="_blank"
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                alt="JAVA SCRIPT"
              />
              <h2>Javascript</h2>
            </a>
            <a target="_blank" href="https://reactjs.org/">
              <img
                src="https://avatars.githubusercontent.com/u/6412038?s=280&v=4"
                alt="React.js"
              />
              <h2>React.js</h2>
            </a>
            <a target="_blank" href="https://redux.js.org/">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbDn-_kLAcnntK415Ct2XJd9Uz6A74Qs6LkvcoS6GNWzG-0zsBTBS1EUTYdJXXJn-JnqQ&usqp=CAU"
                alt="Redux"
              />
              <h2>Redux</h2>
            </a>
            <a target="_blank" href="https://reactjs.org/">
              <img
                src="https://banner2.cleanpng.com/20180621/jow/kisspng-plain-old-java-object-programming-language-compute-5b2b6405b39ad9.4848800015295703097357.jpg"
                alt="java"
              />
              <h2>Java</h2>
            </a>
            <a target="_blank" href="https://redux.js.org/">
              <img
                src="https://www.nicepng.com/png/detail/31-314820_logo-spring-spring-framework-logo-svg.png"
                alt="Spring Boot"
              />
              <h2>SpringBoot</h2>
            </a>
            <a target="_blank" href="https://redux.js.org/">
              <img
                src="https://www.vectorlogo.zone/logos/mysql/mysql-ar21.png"
                alt="Mysql"
              />
              <h2>Mysql</h2>
            </a>{" "}
            <a target="_blank" href="https://reactjs.org/">
              <img
                src="https://i.pinimg.com/236x/ca/dd/fc/caddfc0001548e9397c5352ee4e807ae.jpg"
                alt="AWS server"
              />
              <h2>AWS</h2>
            </a>
            <a target="_blank" href="https://reactjs.org/">
              <img src="https://logodix.com/logo/1989604.png" alt="jwt token" />
              <h2>JWT</h2>
            </a>
          </div>
        </div>
        <div className="project-description">
          <h2 style={{ fontSize: "31px" }}>
            Industry product- AIMEE School Management System
          </h2>
          <p>
            AIMEE Management Portal is a school management system
            where some roles bashed dashboard are allowed to do and manage the
            thing in a school or orgnisation. We are buiding and designing this
            product to manage student data like Academic Profile of the Student, Behavioural Profile of the Student, Sports Profile of the Student, Co-Curricular Activities Profile of the Student.
          </p>
          <p>
            <br />
            <h2>Features:-</h2>
            <ul>
              <li>Sign in with email and password for all roles</li>
              <li>Administrator Dashboard with all functionality</li>
              <li>
                Director & Principle Dashboard for a perticular branch of AIMEE
              </li>
              <li>
                Admin Staff Dashboard for managing a school with Teachers,
                Student,Student Doubts, etc.
              </li>
              <li>Academic Auditor Dashboard</li>
              <li>Teacher Dashboard</li>
              <li>
                All user roles have access for different profiles of student.
              </li>
            </ul>
          </p>
          <br />
          <h2>Tech Stack:-</h2>
          <h3>Frontend Tech Stack-</h3>
          <p>HTML | CSS | Javascript | React | Redux | Chakra</p>
          <h3>Backend Tech Stack-</h3>
          <p>
            JAVA | Spring Boot | Maven | Mysql | Apache | JWT | AWS | Postman |
            Nginx
          </p>
          <div className="live-links">
            <a target="_blank" href="http://52.65.35.157">
              <BsRocketTakeoff /> Live Site
            </a>
            {/* <a
              target="_blank"
              // href=""
            >
              <BsGithub /> Github  <div className="mobileView">Repo</div>
            </a> */}
          </div>
        </div>
      </div>
      {/* Fifth Project */}
      <div className="inner-project">
        <div className="project-video">
          <img src={masaiLearn} alt="Masai Learn" />
          <div className="project-tools">
            <a
              target="_blank"
              href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/1216/1216733.png"
                alt="HTML"
              />
              <h2>HTML</h2>
            </a>
            <a
              target="_blank"
              href="https://developer.mozilla.org/en-US/docs/Web/CSS"
            >
              <img
                src="https://w7.pngwing.com/pngs/454/464/png-transparent-css3-cascading-style-sheets-logo-html-markup-language-others-miscellaneous-blue-angle-thumbnail.png"
                alt="CSS"
              />
              <h2>CSS</h2>
            </a>
            <a
              target="_blank"
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                alt="JAVA SCRIPT"
              />
              <h2>Javascript</h2>
            </a>
            <a target="_blank" href="https://reactjs.org/">
              <img
                src="https://avatars.githubusercontent.com/u/6412038?s=280&v=4"
                alt="React.js"
              />
              <h2>React.js</h2>
            </a>
            <a target="_blank" href="https://redux.js.org/">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbDn-_kLAcnntK415Ct2XJd9Uz6A74Qs6LkvcoS6GNWzG-0zsBTBS1EUTYdJXXJn-JnqQ&usqp=CAU"
                alt="Redux"
              />
              <h2>Redux</h2>
            </a>
            <a target="_blank" href="https://reactjs.org/">
              <img
                src="https://banner2.cleanpng.com/20180621/jow/kisspng-plain-old-java-object-programming-language-compute-5b2b6405b39ad9.4848800015295703097357.jpg"
                alt="java"
              />
              <h2>Java</h2>
            </a>
            <a target="_blank" href="https://redux.js.org/">
              <img
                src="https://www.nicepng.com/png/detail/31-314820_logo-spring-spring-framework-logo-svg.png"
                alt="Spring Boot"
              />
              <h2>SpringBoot</h2>
            </a>
            <a target="_blank" href="https://redux.js.org/">
              <img
                src="https://www.vectorlogo.zone/logos/mysql/mysql-ar21.png"
                alt="Mysql"
              />
              <h2>Mysql</h2>
            </a>{" "}
            <a target="_blank" href="https://reactjs.org/">
              <img
                src="https://i.pinimg.com/236x/ca/dd/fc/caddfc0001548e9397c5352ee4e807ae.jpg"
                alt="AWS server"
              />
              <h2>AWS</h2>
            </a>
            <a target="_blank" href="https://reactjs.org/">
              <img src="https://logodix.com/logo/1989604.png" alt="jwt token" />
              <h2>JWT</h2>
            </a>
          </div>
        </div>
        <div className="project-description">
          <h2 style={{ fontSize: "31px" }}>Masai Learn</h2>
          <p>
            Masai Learn is your one stop solution for enhancing your tech
            knowledge and upskilling to stand out in the IT industry. Be it
            Python or Java, MasaiLearn has got something for everyone. The
            project uses Java Springboot to implement the microservice serving
            the frontend built in React.js.
          </p>
          <p>
            <br />
            <h2>Features:-</h2>
            <ul>
              <li>
                Signup/login with email-otp, mobile-otp, email-password and
                google
              </li>
              <li>Tutorials on various topics</li>
              <li>Video lessons, bookmarking, likes</li>
              <li>Search with topics and sub-topics</li>
              <li>Easy to read and accessible</li>
              <li>Responsive design</li>
              <li>JWT authentication</li>
              <li>Role based user access</li>
              <li>Nginx web server</li>
            </ul>
          </p>
          <br />
          <h2>Tech Stack:-</h2>
          <h3>Frontend Tech Stack-</h3>
          <p>HTML | CSS | Javascript | React | Redux | Chakra</p>
          <h3>Backend Tech Stack-</h3>
          <p>
            JAVA | Spring Boot | Maven | Mysql | Apache | JWT | AWS | Postman |
            Nginx
          </p>
          <div className="live-links">
            <a target="_blank" href="http://13.233.50.68">
              <BsRocketTakeoff /> Live Site
            </a>
            {/* <a
              target="_blank"
              href="https://github.com/masai-builds/masai-tutorials-team3"
            >
              <BsGithub /> Github <div className="mobileView">Repo</div>
            </a> */}
          </div>
        </div>
      </div>

      {/* Fourth Project */}

      <div className="inner-project">
        <div className="project-video">
          {/* <video src={RL} autoplay loop="true"></video> */}
          <img src={indeed} alt="Buy Wow" />
          <div className="project-tools">
            <a
              target="_blank"
              href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/1216/1216733.png"
                alt="HTML"
              />
              <h2>HTML</h2>
            </a>
            <a
              target="_blank"
              href="https://developer.mozilla.org/en-US/docs/Web/CSS"
            >
              <img
                src="https://w7.pngwing.com/pngs/454/464/png-transparent-css3-cascading-style-sheets-logo-html-markup-language-others-miscellaneous-blue-angle-thumbnail.png"
                alt="CSS"
              />
              <h2>CSS</h2>
            </a>
            <a
              target="_blank"
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                alt="JAVA SCRIPT"
              />
              <h2>Javascript</h2>
            </a>

            <a target="_blank" href="https://reactjs.org/">
              <img
                src="https://avatars.githubusercontent.com/u/6412038?s=280&v=4"
                alt="React.js"
              />
              <h2>React.js</h2>
            </a>
            <a target="_blank" href="https://redux.js.org/">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbDn-_kLAcnntK415Ct2XJd9Uz6A74Qs6LkvcoS6GNWzG-0zsBTBS1EUTYdJXXJn-JnqQ&usqp=CAU"
                alt="Redux"
              />
              <h2>Redux</h2>
            </a>
          </div>
        </div>
        <div className="project-description">
          <h2 style={{ fontSize: "31px" }}>Clone of Indeed</h2>
          <p>
            Indeed is a Job Search Site that helps you find job based on your
            profile.
          </p>
          <p>
            <br />
            <h2>Features:-</h2>
            <ul>
              <li>Sign-up/Login</li>
              <li>Different types of jobs</li>
              <li>Search for Jobs </li>
              <li>Apply Job</li>
              <li>Profile Save</li>
              <li>Responsive</li>
            </ul>
          </p>
          <br />
          <h2>Tech Stack:-</h2>
          <p>
            HTML | CSS | Javascript | React | Redux | Firebase | Material UI 
          </p>

          <div className="live-links">
            <a target="_blank" href="https://indeed-beta.vercel.app/">
              <BsRocketTakeoff /> Live Site
            </a>
            <a
              target="_blank"
              href="https://github.com/AdilAhmed976/Indeed.com"
            >
              <BsGithub /> Github <div className="mobileView">Repo</div>
            </a>
          </div>
        </div>
      </div>
      {/* First Project */}
      <div className="inner-project">
        <div className="project-video">
          {/* <video src={RL} autoplay loop="true"></video> */}
          <img src={asos} alt="asos_img" />
          <div className="project-tools">
            <a
              target="_blank"
              href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/1216/1216733.png"
                alt="HTML"
              />
              <h2>HTML</h2>
            </a>
            <a
              target="_blank"
              href="https://developer.mozilla.org/en-US/docs/Web/CSS"
            >
              <img
                src="https://w7.pngwing.com/pngs/454/464/png-transparent-css3-cascading-style-sheets-logo-html-markup-language-others-miscellaneous-blue-angle-thumbnail.png"
                alt="CSS"
              />
              <h2>CSS</h2>
            </a>
            <a
              target="_blank"
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                alt="JAVA SCRIPT"
              />
              <h2>Javascript</h2>
            </a>
            <a
              target="_blank"
              href="https://developers.google.com/maps/documentation/geolocation/overview"
            >
              <img
                src="http://www.multipetros.gr/wp-content/uploads/2013/03/html5-local-storage.jpg"
                alt="Google Location API"
              />
              <h2>Local Storage</h2>
            </a>
          </div>
        </div>
        <div className="project-description">
          <h2 style={{ fontSize: "31px" }}>Clone of Asos</h2>
          <p>
            Asos is an E-commerce website which sells skin care, cloth, health,
            grooming, footwear and accessories product.
          </p>
          <p>
            <br />
            <h2>Features:-</h2>
            <ul>
              <li>Sign-up/Login.</li>
              <li>Product search by Category.</li>
              <li>Sorting and Filtering products.</li>
              <li>Cart functionality.</li>
              <li>Checkout.</li>
              <li>Payment.</li>
            </ul>
          </p>
          <br />
          <h2>Tech Stack:-</h2>
          <p>HTML | CSS | Javascript </p>

          <div className="live-links">
            <a
              target="_blank"
              href="https://frolicking-platypus-d42d1d.netlify.app/"
            >
              <BsRocketTakeoff /> Live Site
            </a>
            <a target="_blank" href="https://github.com/123bhagesh/Asos.com">
              <BsGithub /> Github <div className="mobileView">Repo</div>
            </a>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Projects;
