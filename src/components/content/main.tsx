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
import FreeCodeCampFrontEnd from './education/freecodecamp-frontend';
import FreeCodeCampFrontEndTwo from './education/freecodecamp-frontend2';
import FreeCodeCampLayout from './education/freecodecamp-layout';
import HexletFrontEnd from './education/hexlet-frontend';
import HexletLayout from './education/hexlet-layout';
import BlogOne from './blog/blog-one';
import BlogTwo from './blog/blog-two';

const Main: React.FC = () => {
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
              <Route path="/education/fcclayout" element={<FreeCodeCampLayout />} />
              <Route path="/education/fccfrontend" element={<FreeCodeCampFrontEnd />} />
              <Route path="/education/fccfrontend2" element={<FreeCodeCampFrontEndTwo />} />
            </Route>
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/blog-one" element={<BlogOne />} />
            <Route path="/blog/blog-two" element={<BlogTwo />} />
          </Routes>
        </animated.div>
      ))}
    </main>
  );
};

export default Main;
