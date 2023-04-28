import React from 'react';
import { BsPerson } from 'react-icons/bs';
import { CiLocationOn } from 'react-icons/ci';
import { AiOutlineFire } from 'react-icons/ai';

const About: React.FC = () => {
  return (
    <div className="about-container">
      <div className="about-bio">
        <img src={`${process.env.PUBLIC_URL}/img/1.jpg`} alt="my photo" className="about-image" />
        <p className="about-name">
          <span className="color-main">
            <BsPerson />
          </span>
          Vorobiov Pavel, 25
        </p>
        <p className="about-location">
          <span className="color-main">
            <CiLocationOn />
          </span>
          Belarus, Vitebsk
        </p>
      </div>
      <div className="about-info">
        <h1 className="title">
          About <span className="color-main">Me</span>
        </h1>

        <p className="about-info-text">
          I am an aspiring web developer with a passion for building interactive user experiences. I have skills in
          modern web technologies such as <span className="color-main">JavaScript, TypeScript, HTML</span>, and
          <span className="color-main"> CSS</span>. I also have experience with CSS preprocessors like
          <span className="color-main"> Sass</span>, and frontend frameworks like
          <span className="color-main"> React</span>.
        </p>

        <p className="about-info-text">Some of the tools and libraries I enjoy working with include:</p>

        <ul className="about-info-list">
          <li>
            <span className="color-main">
              <AiOutlineFire /> React
            </span>
            <span> - A popular frontend framework for building user interfaces.</span>
          </li>
          <li>
            <span className="color-main">
              <AiOutlineFire />
              <span> Redux Toolkit</span>
            </span>
            <span> - A toolset for efficient Redux development.</span>
          </li>
          <li>
            <span className="color-main">
              <AiOutlineFire /> React Router
            </span>
            <span> - Routing for React apps.</span>
          </li>
          <li>
            <span className="color-main">
              <AiOutlineFire />
              <span> React Spring</span>
            </span>
            <span> - Spring-based animation and gesture library for React apps.</span>
          </li>
        </ul>

        <p className="about-info-text">
          I am always looking to expand my knowledge and keep up with the latest web technologies. When I&apos;m not
          coding, you can find me reading or exercising etc. I would love the opportunity to bring my skills and
          enthusiasm to your team.
        </p>
      </div>
    </div>
  );
};

export default About;
