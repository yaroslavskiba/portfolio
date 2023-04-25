import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Education = () => {
  return (
    <div className="education-container">
      <h1 className="title">
        Educati<span className="color-main">on</span>
      </h1>
      <div className="education-block">
        <nav className="educationn-nav">
          <Link to="/education">HexletFrontEnd</Link>
          <Link to="/education/hexletlayout">HexletLayout</Link>
          <Link to="/education/fcclayout">FreeCodeCampLayout</Link>
          <Link to="/education/fccfrontend">FreeCodeCampFrontEnd</Link>
        </nav>
        <div className="education-routes">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Education;
