import React from 'react';
import { Outlet } from 'react-router-dom';

const Projects = () => {
  return (
    <div className="projects-container">
      <h1 className="title">
        <span className="color-main">Pr</span>ojects
      </h1>
      <div className="projects-card-list">
        <Outlet />
      </div>
    </div>
  );
};

export default Projects;
