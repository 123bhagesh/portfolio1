/* eslint-disable no-unused-vars */
/* eslint-disable no-lone-blocks */
import React from 'react'
import "./skills.css"
import "../../index.css"
import {AiFillHtml5} from "react-icons/ai"
import {DiCss3} from "react-icons/di"
import {SiJavascript} from "react-icons/si"
import {FaReact} from "react-icons/fa"
import {SiRedux} from "react-icons/si"
import {SiExpress} from "react-icons/si"
import {GrNode} from "react-icons/gr"
import {GrMysql} from "react-icons/gr"
import {SiMongodb} from "react-icons/si"

const Skills = () => {
  return (
    <section id="skills" className="skills">

    <center><h1>Skills</h1></center>
    <div className="skillsContainer">
        <div className="front">
            <a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5">
                <img src="https://cdn-icons-png.flaticon.com/512/1216/1216733.png" alt="HTML" />
                <p>HTML</p>
            </a>
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">
                <img src="https://e7.pngegg.com/pngimages/239/228/png-clipart-html-css3-cascading-style-sheets-logo-markup-language-digital-agency-miscellaneous-blue.png" alt="CSS" />
                <p>CSS</p>
            </a>
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="JAVA SCRIPT" />
                <p>Javascript</p>
            </a>
            <a href="https://reactjs.org/">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt="React" />
                <p>React JS</p>
            </a>
            <a href="https://redux.js.org/">
                <img src="https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/redux-512.png" alt="Redux" />
                <p>Redux</p>
            </a>
        {/* </div> */}
        {/* <div className="back"> */}
            <a href="https://nodejs.org/en/">
                <img src="https://user-images.githubusercontent.com/4727/38117898-75c704e4-336c-11e8-82bb-dffd73f55e94.png" alt="Node JS" />
                <p>Node JS</p>
            </a>
            <a href="https://expressjs.com/">
                <img src="https://pbs.twimg.com/profile_images/1244925541448286208/rzylUjaf_400x400.jpg" alt="Express JS" />
                <p>Chakra UI</p>
            </a>
            <a href="https://www.mongodb.com/">
                <img src="https://cdn.worldvectorlogo.com/logos/typescript-2.svg" alt="Mongo DB" />
                <p>Typescript</p>
            </a>
            <a href="https://www.npmjs.com/">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/1280px-Npm-logo.svg.png" alt="NPM" />
            <p>NPM</p>
            </a>
            <a href="#">
            <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="Github" />
            <p>Github</p>
            </a>
            <a href="#">
            <img src="https://w7.pngwing.com/pngs/125/653/png-transparent-algorithms-data-structures-programs-data-structures-and-algorithms-introduction-to-algorithms-others-miscellaneous-angle-computer-science.png" alt="DS ALGO" />
            <p>DSA</p>
            </a>
            <a href="#">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDNf_xyfNDyt3NEy0S-ETw_2x6qhLwpqax89nd7hgqoA&s" alt="Material UI" />
            <p>MUI</p>
            </a>
            <a href="#">
            <img src="https://i.pinimg.com/236x/ca/dd/fc/caddfc0001548e9397c5352ee4e807ae.jpg" alt="AWS server" />
            <p>AWS</p>
            </a>
            <a href="#">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Markdown-mark.svg/2560px-Markdown-mark.svg.png" alt="Markdown" />
            <p>Markdown</p>
            </a>
            <a href="#">
            <img style={{objectFit:'cover'}} src="https://icons.veryicon.com/png/o/application/skills-section/bootstrap-2.png" alt="Bootstrap" />
            <p>Bootstrap</p>
            </a>

        </div>

    </div>

    </section>
  )
}

export default Skills
