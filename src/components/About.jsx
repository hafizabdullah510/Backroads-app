import React from "react";
import aboutImage from "../assets/images/about.jpeg";
const About = () => {
  return (
    <section id="about">
      <h2 className="section-title">
        About <span>Us</span>
      </h2>
      <div className="section-center about-center">
        <div className="about-img-cont">
          <img src={aboutImage} alt="about-image" className="about-img" />
        </div>
        <div className="about-info-cont">
          <h3>Explore the difference</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
          </p>
          <a className="btn" href="#">
            read more
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
