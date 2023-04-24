import React from 'react';
import Search from './projects/search-engine';
import { Route, Routes, useLocation } from 'react-router-dom';
import { animated, useTransition } from 'react-spring';
import Drum from './projects/drum-machine';
import Mark from './projects/mark';
import Clock from './projects/clock';

const Projects = () => {
  const location = useLocation();

  const transitions = useTransition(location.pathname, {
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
              <Route path="/" element={<Search />} />
              <Route path="/drum" element={<Drum />} />
              <Route path="/mark" element={<Mark />} />
              <Route path="/clock" element={<Clock />} />
            </Routes>
          </animated.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
