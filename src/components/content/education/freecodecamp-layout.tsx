import React from 'react';
import { TbCertificate } from 'react-icons/tb';

const FreeCodeCampLayout = () => {
  return (
    <>
      <div className="education-text">
        <p>
          <span className="color-main">Course:</span> Responsive Web Design{' '}
          <span className="color-main">FREECODECAMP</span>
        </p>
        <div className="education-description">
          <span className="color-main">Course description:</span>
          <p>
            I also completed <span className="sc">FREECODECAMP</span>{' '}
            <span className="color-main">Responsive Web Design Certification</span> course, which taught me the
            fundamental languages used by developers to build webpages: <span className="color-main">HTML</span> for
            content and <span className="color-main">CSS</span> for design.
          </p>
          <p>
            The course started with building a cat photo app, which helped me learn the basics of HTML and CSS. Later, I
            learned <span className="color-main">modern techniques like CSS variables</span> by building a penguin and
            best practices for accessibility by building a quiz site.
          </p>
          <p>
            The course also covered how to make webpages that respond to different screen sizes using{' '}
            <span className="color-main">Flexbox</span> to build a photo gallery and CSS Grid to create a magazine
            article layout.
          </p>
        </div>
      </div>
      <a
        target="blank"
        className="certification"
        href="https://www.freecodecamp.org/certification/Yaroslavskiba/responsive-web-design"
      >
        <TbCertificate />
        FreeCodeCamp certification
      </a>
    </>
  );
};

export default FreeCodeCampLayout;
