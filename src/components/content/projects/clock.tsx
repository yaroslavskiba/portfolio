import React from 'react';
import { GiClick } from 'react-icons/gi';
import { MdViewInAr } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Clock = () => {
  return (
    <div className="projects-list-item">
      <div className="project-item-name">
        <h3 className="project-name">25/5 Clock</h3>
        <Link to="/projects" className="color-main size">
          <GiClick />
        </Link>
      </div>
      <div className="projects-skills">
        <p>
          <span className="color-main">I</span> developed a 25/5 clock app using{' '}
          <span className="color-main">JavaScript, TypeScript, React, and React Hooks</span>. The app implements the{' '}
          <span className="color-main">Pomodoro</span> technique, a productivity method using timed work intervals and
          breaks.
        </p>
        <p>
          The timer counts down <span className="color-main">25</span> minutes of work and{' '}
          <span className="color-main">5</span> minutes of break.
        </p>
        <p>
          JavaScript and TypeScript handled the logic.React rendered the UI and interactive elements. React Hooks
          simplified state management in the function components.
        </p>
        <p>
          The result is a minimal Pomodoro timer app. The project provided valuable experience with industry standards.
          I&apos;ll keep improving the app to strengthen my web development skills.
        </p>
        <p>
          Overall, the educational project was engaging and taught me{' '}
          <span className="color-main">frontend web development</span> and building a practical tool. I look forward to
          using these skills again!
        </p>
        <a href="https://github.com/yaroslavskiba/25-5" target="blank" className="button-main">
          View <MdViewInAr />
        </a>
      </div>
    </div>
  );
};

export default Clock;
