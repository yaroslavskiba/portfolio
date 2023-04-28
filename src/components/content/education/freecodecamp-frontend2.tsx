import React from 'react';
import { TbCertificate } from 'react-icons/tb';

const FreeCodeCampFrontEndTwo = () => {
  return (
    <>
      <div className="education-text">
        <p>
          <span className="color-main">Course:</span> Front End Development Libraries{' '}
          <span className="color-main">FREECODECAMP</span>
        </p>
        <div className="education-description">
          <span className="color-main">Course description:</span>
          <p>
            I recently completed <span className="sc">FREECODECAMP</span> Front End Development Libraries Certification
            course, which taught me some of the <span className="color-main">most popular front end libraries</span> in
            the industry.
          </p>
          <p>
            I learned how to add logic to my CSS styles and extend them with <span className="color-main">Sass</span>.
          </p>
          <p>
            Later, I built a shopping cart and other applications to learn how to create powerful Single Page
            Applications (<span className="color-main">SPAs</span>) with{' '}
            <span className="color-main">React and Redux</span>. These applications helped me gain a deeper
            understanding of how to create dynamic and interactive web pages.
          </p>
        </div>
      </div>
      <a
        className="certification"
        target="blank"
        href="https://www.freecodecamp.org/certification/Yaroslavskiba/front-end-development-libraries"
      >
        <TbCertificate />
        FreeCodeCamp certification
      </a>
    </>
  );
};

export default FreeCodeCampFrontEndTwo;
