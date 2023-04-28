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
      <div className="blog-item-text">
        <p>
          After learning HTML and CSS, I found myself hesitant to begin studying JavaScript. I cannot say for certain
          why this was the case, but I suspect it was due to a fear of not being able to handle the material. I
          initially turned to the website learn.javascript, which is a vast library of JavaScript resources written in
          multiple languages. While I found a great deal of useful information there, there was very little opportunity
          for practical application, which made it difficult for me to solidify my newfound knowledge.
        </p>
        <p>
          After about a month, I realized that this website was not enough for me, and I began searching for structured
          programming courses. I wanted a program that would provide me with a clear path to follow and a sense of
          direction.
        </p>
        <p>
          I frequently came across the online school Hexlet on Twitter, and I decided to reach out to their manager to
          inquire about their courses and pricing. The manager recommended that I try their free introductory course,
          and I agreed. After completing it, I was impressed with the quality of the course material and the level of
          support provided by the instructors.
        </p>
        <p></p>
      </div>
    </div>
  );
};

export default BlogTwo;
