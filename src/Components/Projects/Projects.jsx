/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./projects.css";
import {GrDeploy} from "react-icons/gr";
import { BsRocketTakeoff } from 'react-icons/bs'
import {BsGithub} from "react-icons/bs";
import rodan from "../../assets/rodanFild.png"
import buywow from "../../assets/buywow.png"
import indeed from "../../assets/indeed.png"
import asos from "../../assets/asos.png"
import dnaIndia from "../../assets/dnaIndia.png"

// import appleTV from "../../assets/Apple-tv.png"

const Projects = () => {
  return (
    <div id="projects" className="project">
      <center><h1>Projects</h1></center>

       {/* First Project */}
      <div className="inner-project">
        <div className="project-video">
          {/* <video src={RL} autoplay loop="true"></video> */}
          <img src={asos} alt="asos_img" />
          <div className="project-tools">
            <a target="_blank"  href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1216/1216733.png"
                alt="HTML"
              />
              <h2>HTML</h2>
            </a>
            <a target="_blank"  href="https://developer.mozilla.org/en-US/docs/Web/CSS">
              <img
                src="https://w7.pngwing.com/pngs/454/464/png-transparent-css3-cascading-style-sheets-logo-html-markup-language-others-miscellaneous-blue-angle-thumbnail.png"
                alt="CSS"
              />
              <h2>CSS</h2>
            </a>
            <a target="_blank"  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
              <img
                src="https://img.favpng.com/5/20/4/javascript-angularjs-node-js-computer-icons-clip-art-png-favpng-i95A24zviWmnB1GxB02Hnae5Q.jpg"
                alt="JAVA SCRIPT"
              />
              <h2>JAVASCRIPT</h2>
            </a>
            <a target="_blank"  href="https://developers.google.com/maps/documentation/geolocation/overview">
              <img
                src="http://www.multipetros.gr/wp-content/uploads/2013/03/html5-local-storage.jpg"
                alt="Google Location API"
              />
              <h2>Local Storage</h2>
            </a>
          </div>
        </div>
        <div className="project-description">
          <h2 style={{fontSize:"34px"}}>Clone of Asos</h2>
          <p>
            Asos is an E-commerce website which sells skin care, cloth, health, grooming, footwear and accessories
            product.
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
                <a target="_blank"  href="https://frolicking-platypus-d42d1d.netlify.app/"><BsRocketTakeoff/> Live Site</a>
                <a target="_blank"  href="https://github.com/123bhagesh/Asos.com"><BsGithub/> Github Repo</a>
            </div>
        </div>
      </div>
        
        {/* Second Project */}

      {/* Third project */}
      <div className="inner-project">
        <div className="project-video">
          <img src={buywow} alt="Bath Body Works" />
          <div className="project-tools">
            <a target="_blank"  href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1216/1216733.png"
                alt="HTML"
              />
              <h2>HTML</h2>
            </a>
            <a target="_blank"  href="https://developer.mozilla.org/en-US/docs/Web/CSS">
              <img
                src="https://w7.pngwing.com/pngs/454/464/png-transparent-css3-cascading-style-sheets-logo-html-markup-language-others-miscellaneous-blue-angle-thumbnail.png"
                alt="CSS"
              />
              <h2>CSS</h2>
            </a>
            <a target="_blank"  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
              <img
                src="https://img.favpng.com/5/20/4/javascript-angularjs-node-js-computer-icons-clip-art-png-favpng-i95A24zviWmnB1GxB02Hnae5Q.jpg"
                alt="JAVA SCRIPT"
              />
              <h2>JAVASCRIPT</h2>
            </a>
            <a target="_blank"  href="https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage">
              <img
                src="http://www.multipetros.gr/wp-content/uploads/2013/03/html5-local-storage.jpg"
                alt="Local Storage"
              />
              <h2>Local Storage</h2>
            </a>
          </div>
        </div>
        <div className="project-description">
          <h2 style={{fontSize:"34px"}}>Clone of Buywow</h2>
          <p>
          This project is a clone of "www.buywow.in", which is a health, grooming, and beauty Products website. 
          </p>
          <p>
              <br />
            <h2>Features:-</h2>
            <ul>
              <li>Sign-up/Login.</li>
              <li>Searching products by name.</li>
              <li>Sorting and Feltering products on different parameters.</li>
              <li>Add to cart</li>
              <li>Checkout.</li>
              <li>Promocode.</li>
            </ul>
            </p>
            <br />
            <h2>Tech Stack:-</h2>
            <p>HTML | CSS | Javascript </p>

            <div className="live-links">
                <a target="_blank"  href="https://dazzling-horse-5169fb.netlify.app/"><BsRocketTakeoff/> Live Site</a>
                <a target="_blank"  href="https://github.com/kosireddisreeram/unit3_constructweek" ><BsGithub/> Github Repo</a>
            </div>
        </div>
      </div>
      

      <div className="inner-project">
        <div className="project-video">
          {/* <video src={RL} autoplay loop="true"></video> */}
          <img src={indeed} alt="Buy Wow" />
          <div className="project-tools">
            <a target="_blank"  href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1216/1216733.png"
                alt="HTML"
              />
              <h2>HTML</h2>
            </a>
            <a target="_blank"  href="https://developer.mozilla.org/en-US/docs/Web/CSS">
              <img
                src="https://w7.pngwing.com/pngs/454/464/png-transparent-css3-cascading-style-sheets-logo-html-markup-language-others-miscellaneous-blue-angle-thumbnail.png"
                alt="CSS"
              />
              <h2>CSS</h2>
            </a>
            <a target="_blank"  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
              <img
                src="https://img.favpng.com/5/20/4/javascript-angularjs-node-js-computer-icons-clip-art-png-favpng-i95A24zviWmnB1GxB02Hnae5Q.jpg"
                alt="JAVA SCRIPT"
              />
              <h2>JAVASCRIPT</h2>
            </a>

            <a target="_blank"  href="https://reactjs.org/">
              <img
                src="https://avatars.githubusercontent.com/u/6412038?s=280&v=4"
                alt="React.js"
              />
              <h2>React.js</h2>
            </a>
            <a target="_blank"  href="https://redux.js.org/">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbDn-_kLAcnntK415Ct2XJd9Uz6A74Qs6LkvcoS6GNWzG-0zsBTBS1EUTYdJXXJn-JnqQ&usqp=CAU"
                alt="Redux"
              />
              <h2>Redux</h2>
            </a>
          </div>
        </div>
        <div className="project-description">
          <h2 style={{fontSize:"34px"}}>Clone of Indeed</h2>
          <p>
          Indeed is a Job Search Site that helps you find job based on your profile.
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
            <p>HTML | CSS | Javascript | React | Redux | Firebase | Material UI | Heroku Api</p>

            <div className="live-links">
                <a target="_blank"  href="https://indeed-beta.vercel.app/"><BsRocketTakeoff/> Live Site</a>
                <a target="_blank"  href="https://github.com/AdilAhmed976/Indeed.com"><BsGithub/> Github Repo</a>
            </div>
        </div>
      </div>
      {/* Fourth Project */}
      
      <div className="inner-project">
        <div className="project-video">
          <img src={dnaIndia} alt="Dna India" />
          <div className="project-tools">
            <a target="_blank"  href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1216/1216733.png"
                alt="HTML"
              />
              <h2>HTML</h2>
            </a>
            <a target="_blank"  href="https://developer.mozilla.org/en-US/docs/Web/CSS">
              <img
                src="https://w7.pngwing.com/pngs/454/464/png-transparent-css3-cascading-style-sheets-logo-html-markup-language-others-miscellaneous-blue-angle-thumbnail.png"
                alt="CSS"
              />
              <h2>CSS</h2>
            </a>
            <a target="_blank"  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
              <img
                src="https://img.favpng.com/5/20/4/javascript-angularjs-node-js-computer-icons-clip-art-png-favpng-i95A24zviWmnB1GxB02Hnae5Q.jpg"
                alt="JAVA SCRIPT"
              />
              <h2>JAVASCRIPT</h2>
            </a>

            <a target="_blank"  href="https://reactjs.org/">
              <img
                src="https://avatars.githubusercontent.com/u/6412038?s=280&v=4"
                alt="React.js"
              />
              <h2>React.js</h2>
            </a>
            <a target="_blank"  href="https://redux.js.org/">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbDn-_kLAcnntK415Ct2XJd9Uz6A74Qs6LkvcoS6GNWzG-0zsBTBS1EUTYdJXXJn-JnqQ&usqp=CAU"
                alt="Redux"
              />
              <h2>Redux</h2>
            </a>
          </div>
        </div>
        <div className="project-description">
          <h2 style={{fontSize:"34px"}}>Clone of DnaIndia</h2>
          <p>
          DnaIndia  is news website. Latest News Headlines and Live Updates - DNA India Covers all latest and breaking news on Politics, Business, Sports, Bollywood, technology & health. 
          </p>
          <p>
              <br />
            <h2>Features:-</h2>
            <ul>
              <li>Latest News</li>
              <li>Different types of News</li>
              <li>Fetching Api</li>
              <li>Photos</li>
              <li>Videos</li>
              
            </ul>
            </p>
            <br />
            <h2>Tech Stack:-</h2>
            <p>HTML | CSS | Javascript | React | Redux | Chakra</p>
            <div className="live-links">
                <a target="_blank"  href="https://dna-india-clone-nine.vercel.app/"><BsRocketTakeoff/> Live Site</a>
                <a target="_blank"  href="https://github.com/SayedMajid/dnaIndiaClone" ><BsGithub/> Github Repo</a>
            </div>
        </div>
      </div>

      
     
    </div>
  )
}

export default Projects;