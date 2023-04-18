import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <a href="#" className="main-link-navigation"></a>
      <nav className="navigation">
        <ul className="navigation-list">
          <li className="navigation-item">
            <a href="#">About Me</a>
          </li>

          <li className="navigation-item">
            <a href="#">Projects</a>
          </li>

          <li className="navigation-item">
            <a href="#">Skills</a>
          </li>

          <li className="navigation-item">
            <a href="#">Education</a>
          </li>

          <li className="navigation-item">
            <a href="#">Contact</a>
          </li>

          <li className="navigation-item">
            <a href="#">Blog</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
