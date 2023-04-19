import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';

const Header = () => {
  const [current, setCurrent] = useState<string>('About Me');

  const list = [
    { name: 'About Me', link: '/' },
    { name: 'Projects', link: '/projects' },
    { name: 'Skills', link: '/skills' },
    { name: 'Education', link: '/education' },
    { name: 'Contact', link: '/contact' },
    { name: 'Blog', link: '/blog' },
  ];

  const handleClick = (name: string) => setCurrent(name);

  return (
    <header className="header">
      <nav className="navigation">
        {window.innerWidth >= 768 ? (
          <ul className="navigation-list">
            {list.map((item) => {
              const name = item.name;

              return (
                <li key={name} className={`navigation-item${current === name ? ' current-link' : ''}`}>
                  <Link to={item.link} onClick={() => handleClick(name)}>
                    {name}
                  </Link>
                </li>
              );
            })}
          </ul>
        ) : (
          <Menu right>
            {list.map((item) => {
              const name = item.name;

              return (
                <li key={name} className={`navigation-item${current === name ? ' current-link' : ''}`}>
                  <Link to={item.link} onClick={() => handleClick(name)}>
                    {name}
                  </Link>
                </li>
              );
            })}
          </Menu>
        )}
      </nav>
    </header>
  );
};

export default Header;
