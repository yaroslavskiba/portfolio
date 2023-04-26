import React from 'react';

const HexletFrontEnd = () => {
  return (
    <>
      <div className="education-text">
        <p>
          <span className="color-main">Course:</span> Frontend Developer <span className="color-main">HEXLET</span>
        </p>
        <div className="education-description">
          <span className="color-main">Course description:</span>
          <p>
            During the past <span className="color-main">5 months</span>, I have completed{' '}
            <span className="sc">HEXLET</span> several courses on web development and programming. I have gained
            knowledge and skills in modern web development, content layout, CSS positioning, and Flexbox. I have also
            learned about <span className="color-main">debugging code using Chrome DevTools</span>.
          </p>
          <p>
            In addition, I have completed courses on web programming, including{' '}
            <span className="color-main">JavaScript, command-line basics, Git, and effective debugging techniques</span>
            . I have also learned about <span className="color-main">data structures and algorithms</span>, functional
            programming etc.
          </p>
          <p>
            Furthermore, I have completed courses on developing browser applications using{' '}
            <span className="color-main">React, Redux, Redux Toolkit</span>.
          </p>
          <p>
            Overall, I have gained a solid foundation in web development and programming, and I am excited to apply my
            skills in real-world projects.
          </p>
        </div>
      </div>
      <div className="education-stat">
        <div>
          <div>
            <p className="stat-title">Completed Courses:</p>
            <p>40</p>
          </div>
          <div>
            <p className="stat-title">Completed Tests:</p>
            <p>107</p>
          </div>
        </div>
        <div>
          <div>
            <p className="stat-title">Correct Solutions:</p>
            <p>97.2%</p>
          </div>
          <div>
            <p className="stat-title">Score:</p>
            <p>2445</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HexletFrontEnd;
