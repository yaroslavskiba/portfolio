import React from 'react';
import { BsPerson } from 'react-icons/bs';
import { CiLocationOn } from 'react-icons/ci';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-bio">
        <img src={`${process.env.PUBLIC_URL}/img/1.jpg`} alt="my photo" className="about-image" />
        <p className="about-name">
          <BsPerson />
          Vorobiov Pavel, 25
        </p>
        <p className="about-location">
          <CiLocationOn />
          Belarus, Vitebsk
        </p>
      </div>
      <div className="about-info">
        <h1 className="title">About Me</h1>

        <p className="about-info-text">
          I am an aspiring web developer with a passion for building interactive user experiences. I have skills in
          modern web technologies such as <span className="link-color">JavaScript, TypeScript, HTML</span>, and
          <span className="link-color"> CSS</span>. I also have experience with CSS preprocessors like
          <span className="link-color"> Sass</span>, and frontend frameworks like
          <span className="link-color"> React</span>.
        </p>

        <p className="about-info-text">Some of the tools and libraries I enjoy working with include:</p>

        <ul className="about-info-list">
          <li>
            <span className="link-color">React</span> - A popular frontend framework for building user interfaces.
          </li>
          <li>
            <span className="link-color">Redux Toolkit</span> - A toolset for efficient Redux development.
          </li>
          <li>
            <span className="link-color">React Router</span> - Routing for React apps.
          </li>
          <li>
            <span className="link-color">React Spring</span> - Spring-based animation and gesture library for React
            apps.
          </li>
        </ul>

        <p className="about-info-text">
          I am always looking to expand my knowledge and keep up with the latest web technologies. When I&apos;m not
          coding, you can find me reading, exercising, or enjoying the outdoors. I would love the opportunity to bring
          my skills and enthusiasm to your team.
        </p>
      </div>
    </div>
  );
};

export default About;
