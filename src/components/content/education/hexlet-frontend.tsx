import React from 'react';

const HexletFrontEnd = () => {
  return (
    <>
      <div className="education text">
        <p>
          <span className="color-main">Course:</span> Frontend Developer
        </p>
        <div className="education-description">
          <span className="color-main">Course description:</span>
          <p>
            During the past 5 months, I have completed several courses on web development and programming. I have gained
            knowledge and skills in modern web development, content layout, CSS positioning, and Flexbox. I have also
            learned about debugging code using Chrome DevTools.
          </p>
          <p>
            In addition, I have completed courses on web programming, including JavaScript, command-line basics, Git,
            and effective debugging techniques. I have also learned about data structures and algorithms, functional
            programming etc.
          </p>
          <p>
            Furthermore, I have completed courses on developing browser applications using React, Redux, Redux Toolkit.
          </p>
          <p>
            Overall, I have gained a solid foundation in web development and programming, and I am excited to apply my
            skills in real-world projects.
          </p>
        </div>
      </div>
      <div className="education-stat">
        <div>
          <p className="stat-title">Completed Courses:</p>
          <p>40</p>
        </div>
        <div>
          <p className="stat-title">Completed Tests:</p>
          <p>107</p>
        </div>
        <div>
          <p className="stat-title">Correct Solutions:</p>
          <p>97.2%</p>
        </div>
        <div>
          <p className="stat-title">Score:</p>
          <p>2445</p>
        </div>
      </div>
    </>
  );
};

export default HexletFrontEnd;
