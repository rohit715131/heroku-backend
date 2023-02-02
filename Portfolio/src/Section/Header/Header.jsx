import React from "react";
import HeaderImage from "../../assest/devImage.gif";
import data from "./data";
import "./Header.css";

const Header = () => {
  return (
    <header id="header">
      <div className="container header_container">
        <div className="header_profile">
          <img
            src={HeaderImage}
            alt="Header Image"
            width="100%"
            height="auto"
          />
        </div>
        <h3>Hi 👋, I'm Rohit Kumar Yadav</h3>
        <div class="wrapper">
          <div class="static-txt"> And I'm a</div>
          <ul class="dynamic-txts">
            <li>
              <span>Full Stack Developer</span>
            </li>
            <li>
              <span>MERN Developer</span>
            </li>
            <li>
              <span>Frontend Developer</span>
            </li>
            <li>
              <span>Backend Developer</span>
            </li>
          </ul>
        </div>
        <p className="ptag">
          Analytical and detail-Oriented aspiring Full Stack Web Developer💻.
          Capable of writing production-ready code using React JS, Redux, HTML
          and CSS on the front end and NodeJS, ExpressJS, and MongoDB on the
          backend to build single-page applications. Collaborative, team player
          who is proficient in working with a interactive team, on goal-oriented
          📂Projects.
        </p>
        <div className="header_cta">
          <a href="#contact" className="btn primary">
            Let's Connect
          </a>
          <a href="#Project" className="btn light">
            MY Work
          </a>
        </div>
        <div className="header_socials">
          {data.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
