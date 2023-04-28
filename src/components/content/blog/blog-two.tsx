import React from 'react';
import { AiOutlineRollback } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const BlogTwo = () => {
  return (
    <div className="blog-item-container">
      <div className="blog-item-header title">
        <Link to="/blog">
          <span className="sch">
            <AiOutlineRollback />
          </span>
        </Link>
        <h1 className="title">
          The Story of <span className="color-main">How it All</span> Began, Part <span className="color-main">2</span>
        </h1>
      </div>
      <div className="blog-item-text"></div>
    </div>
  );
};

export default BlogTwo;
