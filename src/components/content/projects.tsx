import React from 'react';
import { FiGithub } from 'react-icons/fi';

const Projects = () => {
  return (
    <div className="projects-container">
      <h1 className="title">
        <span className="color-main">Pr</span>ojects
      </h1>
      <p className="projects-text">
        You can take a look at my works on my{' '}
        <a className="color-main" target="blank" href="https://github.com/yaroslavskiba">
          <FiGithub /> GitHub account
        </a>
        , some of which are listed below:
      </p>
      <ul className="projects-list">
        <li className="projects-item">
          <a href="https://github.com/yaroslavskiba/25-5">
            <img className="projects-item-image" src={`${process.env.PUBLIC_URL}/img/3.png`} alt="project screenshot" />
          </a>
          <p className="caption-text">25/5 Clock</p>
          <p>
            <span className="color-main">FreeCodeCamp</span>
          </p>
        </li>

        <li className="projects-item">
          <a href="https://github.com/yaroslavskiba/drum-machine">
            <img className="projects-item-image" src={`${process.env.PUBLIC_URL}/img/2.png`} alt="project screenshot" />
          </a>
          <p className="caption-text">Drum Machine</p>
          <p>
            <span className="color-main">FreeCodeCamp</span>
          </p>
        </li>

        <li className="projects-item">
          <a href="https://github.com/yaroslavskiba/markdown-previewer">
            <img className="projects-item-image" src={`${process.env.PUBLIC_URL}/img/4.png`} alt="project screenshot" />
          </a>
          <p className="caption-text">Markdown Previewer</p>
          <p>
            <span className="color-main">FreeCodeCamp</span>
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Projects;
