import React from 'react';
import Clock from './projects/clock';
import { Route, Routes, useLocation } from 'react-router-dom';
import { animated, useTransition } from 'react-spring';

const Projects = () => {
  const location = useLocation();

  const transitions = useTransition(location, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: null,
    config: { duration: 500 },
  });

  return (
    <div className="projects-container">
      <h1 className="title">
        <span className="color-main">Pr</span>ojects
      </h1>
      <div className="projects-card-list">
        {transitions((props, item) => (
          <animated.div style={props}>
            <Routes location={item}>
              <Route path="/" element={<Clock />} />
              <Route path="/clock" element={<Clock />} />
            </Routes>
          </animated.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
