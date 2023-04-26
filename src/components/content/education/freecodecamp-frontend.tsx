import React from 'react';
import { TbCertificate } from 'react-icons/tb';

const FreeCodeCampFrontEnd = () => {
  return (
    <>
      <div className="education-text">
        <p>
          <span className="color-main">Course:</span> JavaScript Algorithms and Data Structures{' '}
          <span className="color-main">FREECODECAMP</span>
        </p>
        <div className="education-description">
          <span className="color-main">Course description:</span>
          <p>
            I completed <span className="sc">FREECODECAMP</span> JavaScript Algorithm and Data Structures Certification
            course, which taught me the <span className="color-main">fundamentals</span> of JavaScript, including{' '}
            <span className="color-main">variables, arrays, objects, loops, and functions</span>.
          </p>
          <p>
            The course provided me with a solid <span className="color-main">foundation in programming</span>, and I was
            able to apply my knowledge by{' '}
            <span className="color-main">creating algorithms to manipulate strings, factorialize numbers</span>, and
            even calculate the orbit of the International Space Station.
          </p>
          <p>
            In addition to learning the basics of JavaScript, the course also covered two important programming styles:
            Object Oriented Programming (<span className="color-main">OOP</span>) and Functional Programming (
            <span className="color-main">FP</span>). I gained a deeper understanding of these programming paradigms and
            how to apply them in my <span className="color-main">code</span>.
          </p>
        </div>
      </div>
      <a
        className="certification"
        target="blank"
        href="https://www.freecodecamp.org/certification/Yaroslavskiba/javascript-algorithms-and-data-structures"
      >
        <TbCertificate />
        FreeCodeCamp certification
      </a>
    </>
  );
};

export default FreeCodeCampFrontEnd;
