import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { animated, useTransition } from 'react-spring';
import About from './about';
import Blog from './blog';
import Contact from './contact';
import Education from './education';
import Projects from './projects';
import Skills from './skills';

const Main = () => {
  const location = useLocation();

  const transitions = useTransition(location, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: null,
    config: { duration: 500 },
  });

  return (
    <main className="main">
      {transitions((props, item) => (
        <animated.div style={props}>
          <Routes location={item}>
            <Route path="/" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/education" element={<Education />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </animated.div>
      ))}
    </main>
  );
};

export default Main;
