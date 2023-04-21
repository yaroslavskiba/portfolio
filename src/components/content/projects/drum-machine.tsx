import React from 'react';
import { GiClick } from 'react-icons/gi';
import { MdViewInAr } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Drum = () => {
  return (
    <div className="projects-list-item">
      <div className="project-item-name">
        <h3 className="project-name">Drum Machine</h3>
        <Link to="/projects" className="color-main size">
          <GiClick />
        </Link>
      </div>
      <div className="projects-skills">
        <p>The Drum Machine project is written using JavaScript, React, Redux and SCSS technologies.</p>
        <p>
          It has <span className="color-main">9 buttons</span>, each button has 2{' '}
          <span className="color-main">audio tracks</span> assigned to it. When you press the buttons, the sound is
          played.
        </p>
        <p>
          The application allows you to play drum sounds by clicking the{' '}
          <span className="color-main">corresponding buttons</span>. Each button plays a different drum sample. By
          combining different buttons, you can create various rhythmic patterns and drum beats.
        </p>
        <p>
          <span className="color-main">CSS styles</span> are used to create a responsive interface for the Drum Machine.
          The project can be scaled to different screen sizes while preserving the layout and functionality.
        </p>
        <p>
          Overall, the Drum Machine app demonstrates how to build a simple instrument{' '}
          <span className="color-main">simulator</span> using modern frontend technologies.
        </p>
        <a href="https://github.com/yaroslavskiba/drum-machine" target="blank" className="button-main">
          View <MdViewInAr />
        </a>
      </div>
    </div>
  );
};

export default Drum;
