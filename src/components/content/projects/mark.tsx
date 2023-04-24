import React from 'react';
import { GiClick } from 'react-icons/gi';
import { MdViewInAr } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Mark = () => {
  return (
    <div className="projects-list-item">
      <div className="project-item-name">
        <h3 className="project-name">Markdown Previewer</h3>
        <Link to="/projects/clock" className="color-main size">
          <GiClick />
        </Link>
      </div>
      <div className="projects-skills">
        <p>To implement the project, I used the following technologies:</p>
        <p>
          <span className="color-main">JavaScript</span> - the main programming language. Used to{' '}
          <span className="color-main">develop logic and interactivity</span> of the project.
        </p>
        <p>
          <span className="color-main">React</span> - a framework for building interactive interfaces. It helped me
          create a component approach and effectively manage state.
        </p>
        <p>
          <span className="color-main">Redux</span> - to provide a centralized state management. This helped me maintain
          predictability of the data flow and ensure transparency when making changes to the application state.
        </p>
        <p>
          <span className="color-main">SCSS</span> - to design and style the interface, I used the CSS preprocessor -
          Sass and the Bootstrap library.
        </p>
        <p>
          I built a <span className="color-main">Markdown preview</span> using JavaScript, React, Redux and Sass. The
          app allows you to easily render <span className="color-main">Markdown text right in the browser</span>. It
          employs a component approach with predictable state handling and an elegant design.
        </p>
        <a href="https://github.com/yaroslavskiba/markdown-previewer" target="blank" className="button-main">
          View <MdViewInAr />
        </a>
      </div>
    </div>
  );
};

export default Mark;
