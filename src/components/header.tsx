import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <a href="#" className="main-link-navigation"></a>
      <nav className="navigation">
        <ul className="navigation-list">
          <li className="navigation-item">
            <Link to="/">About Me</Link>
          </li>

          <li className="navigation-item">
            <Link to="/projects">Projects</Link>
          </li>

          <li className="navigation-item">
            <Link to="/skills">Skills</Link>
          </li>

          <li className="navigation-item">
            <Link to="/education">Education</Link>
          </li>

          <li className="navigation-item">
            <Link to="/contact">Contact</Link>
          </li>

          <li className="navigation-item">
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
