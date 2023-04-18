import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './about';
import Blog from './blog';
import Contact from './contact';
import Education from './education';
import Projects from './projects';
import Skills from './skills';

const Main = () => {
  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/education" element={<Education />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </main>
  );
};

export default Main;
