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
                <div><img src="https://cdn-icons-png.flaticon.com/512/1216/1216733.png" alt="HTML" /></div>
                <p>HTML</p>
            </a>
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">
                <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjK60Fd1shaOG5Glq2toJyChKNGP9Ocmm4PC_r27rEB0XzDQrSgOUpIDHjOZriA-lZkS0&usqp=CAU" alt="CSS" /></div>
                <p>CSS</p>
            </a>
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
                <div><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png" alt="JAVA SCRIPT" /></div>
                <p>JAVASCRIPT</p>
            </a>
            <a href="https://reactjs.org/">
                <div><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt="React" /></div>
                <p>React JS</p>
            </a>
            <a href="https://redux.js.org/">
                <div><img src="https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/redux-512.png" alt="Redux" /></div>
                <p>Redux</p>
            </a>
        {/* </div>
        <div className="back"> */}
            <a href="https://nodejs.org/en/">
                <div><img src="https://user-images.githubusercontent.com/4727/38117898-75c704e4-336c-11e8-82bb-dffd73f55e94.png" alt="Node JS" /></div>
                <p>Node JS</p>
            </a>
            <a href="https://expressjs.com/">
                <div><img src="https://pbs.twimg.com/profile_images/1244925541448286208/rzylUjaf_400x400.jpg" alt="Express JS" /></div>
                <p>Chakra UI</p>
            </a>
            <a href="https://www.mongodb.com/">
                <div><img src="https://cdn.worldvectorlogo.com/logos/typescript-2.svg" alt="Mongo DB" /></div>
                <p>Typescript</p>
            </a>
            <a href="https://www.npmjs.com/">
            <div><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/1280px-Npm-logo.svg.png" alt="NPM" /></div>
            <p>NPM</p>
            </a>
            <a href="#">
            <div><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="Github" /></div>
            <p>Github</p>
            </a>
            
        </div>
    </div>

    </section>
  )
}

export default Skills

