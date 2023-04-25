import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { animated, useTransition } from 'react-spring';
import About from './about';
import Blog from './blog';
import Contact from './contact';
import Education from './education';
import Projects from './projects';
import Skills from './skills';
import Search from './projects/search-engine';
import Drum from './projects/drum-machine';
import Mark from './projects/mark';
import Clock from './projects/clock';
import FreeCodeCampLayout from './education/freecodecamp-frontend';
import FreeCodeCampFrontEnd from './education/freecodecamp-layout';
import HexletFrontEnd from './education/hexlet-frontend';
import HexletLayout from './education/hexlet-layout';

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
            <Route path="/projects" element={<Projects />}>
              <Route path="/projects" element={<Search />} />
              <Route path="/projects/drum" element={<Drum />} />
              <Route path="/projects/mark" element={<Mark />} />
              <Route path="/projects/clock" element={<Clock />} />
            </Route>
            <Route path="/skills" element={<Skills />} />
            <Route path="/education" element={<Education />}>
              <Route path="/education" element={<HexletFrontEnd />} />
              <Route path="/education/hexletlayout" element={<HexletLayout />} />
              <Route path="/educationfcclayout" element={<FreeCodeCampLayout />} />
              <Route path="/educationfccfrontend" element={<FreeCodeCampFrontEnd />} />
            </Route>
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </animated.div>
      ))}
    </main>
  );
};

export default Main;
