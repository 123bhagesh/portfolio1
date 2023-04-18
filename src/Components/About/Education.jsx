/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./education.css";
let educationData = [
  {
    qualification: "Full Stack Web Developer",
    collageName: "Masai School, Bangalore, KA",
    dataFrom: "Dec 2021 - Nov 2022",
  },
  {
    qualification: "Bachelor in Civil Engineering",
    collageName: "Priyadarshini Indira Gandhi College of Engineering, Nagpur",
    dataFrom: "Aug 2018 - Aug 2021",
  },
  {
    qualification: "Diploma in CIvil Engineering",
    collageName: "Gurukul Polytechnic, Nagra Gondia",
    dataFrom: "Jul 2015 - Jun 2018",
  },
];
const Education = () => {
  return (
    <div id="education" className="project">
      <center>
        <h1 >Education</h1>
      </center>

      {/* First Project */}
      <div className="educationContainer">
        {educationData.map((el) => (
          <div
           className="educationDiv"
          >
            <h2 >{el.qualification}</h2>
            <p>{el.collageName}</p>
            <p>{el.dataFrom}</p>
          </div>
        ))}
      </div>

      {/* <div className="inner-project">
        <div
          style={{
            width: "400px",
            height: "200px",
            border: "1px solid white",
            marginTop: "8px",
            padding: "20px",
          }}
        >
          <h2>Bacholor In Civil Engineering</h2>
          <p>Priyadarshini Indira Gandhi College of Engineering, Nagpur</p>
          <p>Aug 2018 - Aug 2021</p>
        </div>
      </div> */}

      {/* Second Project */}
    </div>
  );
};

export default Education;
