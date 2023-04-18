import React, { useEffect, useState } from "react";
import "./github.css";
import GitHubCalendar from "react-github-calendar";

export const Github = () => {
  const [text, setText] = useState();


  return (
    <div id="github">
      <center>
        <h1 style={{ marginTop: "10px" }}>GitHub Analytics</h1>
      </center>
      <div className="githubContainer">
        
        <a href="https://github.com/123bhagesh" target="blank">
          <img
            height="160em"
            src="https://github-readme-stats-eight-theta.vercel.app/api?username=123bhagesh&show_icons=true&theme=algolia&include_all_commits=true&count_private=true"
          />
        </a>
        <a href="https://github.com/123bhagesh" target="blank">
          <img
            align="center"
            height="170rem"
            src="https://github-readme-streak-stats.herokuapp.com/?user=123bhagesh&theme=dark&background=0d1117&date_format=M%20j%5B%2C%20Y%5D"
            alt="adam-pw"
          />
        </a>
      </div>
      <div className="githubCalender">
          <GitHubCalendar
            username="123bhagesh"
            colorScheme="dark"
            style={{ width: "100%" }}
          />
   </div>
    </div>
  );
};
