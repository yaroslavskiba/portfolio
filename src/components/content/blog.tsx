import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const store = [
    { name: 'The Story of How it All Began', link: '/blog/blog-one' },
    { name: 'The Story of How it All Began, Part2', link: '/blog/blog-two' },
  ];
  return (
    <div className="blog-container">
      <h1 className="title">
        B<span className="color-main">log</span>
      </h1>
      <ul className="blog-list">
        {store.map((item) => {
          return (
            <li key={item.name}>
              <div className="blog-item">
                <div className="blog-item-name">
                  <p>{item.name}</p>
                </div>
                <Link className="blog-item-link" to={item.link}>
                  View
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Blog;
