/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { TbHexagonLetterH, TbHexagonLetterF } from 'react-icons/tb';

interface EducationItem {
  name: string;
  link: string;
  icon: JSX.Element;
}

const Education: React.FC = () => {
  const location = useLocation();

  const [current, setCurrent] = useState<string>('hexlet frontend');

  useEffect(() => {
    const currentRoute = store.find((item: EducationItem) => item.link === location.pathname);
    if (currentRoute) {
      setCurrent(currentRoute.name);
    }
  }, [location]);

  const store: EducationItem[] = [
    { name: 'hexlet frontend', link: '/education', icon: <TbHexagonLetterH /> },
    { name: 'hexlet layout', link: '/education/hexletlayout', icon: <TbHexagonLetterH /> },
    { name: 'freecodecamp layout', link: '/education/fcclayout', icon: <TbHexagonLetterF /> },
    { name: 'freecodecamp frontend', link: '/education/fccfrontend', icon: <TbHexagonLetterF /> },
    { name: 'freecodecamp frontend-2', link: '/education/fccfrontend2', icon: <TbHexagonLetterF /> },
  ];

  return (
    <div className="education-container">
      <h1 className="title">
        Educati<span className="color-main">on</span>
      </h1>
      <div className="education-block">
        <ul className="education-nav">
          {store.map((item: EducationItem) => {
            const name = item.name;
            return (
              <li key={name} className={`education-icon ${current === name ? 'education-current' : ''}`}>
                <Link to={item.link}>{item.icon}</Link>
              </li>
            );
          })}
        </ul>
        <div className="education-routes">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Education;
