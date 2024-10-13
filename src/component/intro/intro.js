import React from "react";
import "./intro.css";
import bg from "../../icons/myimage.jpeg";
import resume from "../../icons/resume.png";
import { Bio } from "../../data/constants";

import { Link } from "react-scroll";
const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Vibha Saroha</span>
          <br /> Front-end Developer.
        </span>
        <p className="introPara">
          A focused,flexible and motivated professional, <br /> who is looking
          forward to work as a Web Developer. <br /> An
          organized,detail-oriented and passionate engineer, <br /> who is able
          to accomplish multiple tasks at ease.
          <br />
        </p>
        
        
      </div>
      <img src={bg} alt="" className="bg" />
      
    </section>
  );
};

export default Intro;
