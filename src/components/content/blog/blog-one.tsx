import React from 'react';
import { AiOutlineRollback } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const BlogOne = () => {
  return (
    <div className="blog-item-container">
      <div className="blog-item-header title">
        <Link to="/blog">
          <span className="sch">
            <AiOutlineRollback />
          </span>
        </Link>
        <h1 className="title">
          The Story of <span className="color-main">How it All</span> Began
        </h1>
      </div>
      <div className="blog-item-text">
        <p>
          Becoming a programmer requires <span className="color-main">dedication</span>,{' '}
          <span className="color-main">perseverance</span>, and{' '}
          <span className="color-main">a willingness to learn</span>. My journey began with learning{' '}
          <span className="color-main">HTML</span> and <span className="color-main">CSS</span> through YouTube videos.
          At first, it was daunting to find the necessary information, choose the right technologies, and create a
          comprehensive learning plan. However, I was determined to overcome these challenges and chose front-end
          development, which proved to be a bit easier due to the consistency of information on HTML and CSS.
        </p>
        <p>
          As I mastered the basics, I continued my education through <span className="color-main">forums</span>,{' '}
          <span className="color-main">articles</span>, and <span className="color-main">free courses</span>. I was
          fortunate to work with a designer who provided me with live site mockups to practice my skills on. My approach
          was simple yet effective:{' '}
          <span className="color-main">&quot;learn something new, build a page from scratch.&quot;</span> I repeated
          this process many times, which helped me to reinforce my knowledge and skills.
        </p>
        <p>
          As I delve into the fascinating world of HTML and CSS, I have come to realize several crucial points that are
          worth highlighting. I cannot stress enough the importance of <span className="color-main">practice</span>. It
          is not just important, it is absolutely essential! Without consistent practice, one&apos;s knowledge will
          remain stagnant and theoretical, and the true magic of HTML and CSS will remain elusive.
        </p>
        <p>
          I have found that watching <span className="color-main">instructional videos on YouTube</span> and{' '}
          <span className="color-main">exploring the works of other talented individuals</span> on platforms such as{' '}
          <span className="color-main">CodePen</span> can be incredibly enlightening. It exposes one to a plethora of
          innovative approaches to writing and styling one&apos;s own work, and can be a source of inspiration and
          motivation.
        </p>
        <p>
          It is imperative to develop the habit of checking the compatibility of the tools one is using. The behavior of
          one&apos;s work can vary greatly across different browsers, and it is crucial to ensure that one&apos;s work
          is accessible and functional for all users.
        </p>
        <p>
          As I progressed in my journey, I realized that HTML and CSS are just the tip of the iceberg. There are many
          other technologies and programming languages that one can learn to become a well-rounded developer.
          <span className="color-main">JavaScript</span>, for example, is a powerful language that can be used to create
          dynamic and interactive web pages.
        </p>
        <p>
          Another important aspect of becoming a programmer is staying up-to-date with the{' '}
          <span className="color-main">latest trends and technologies</span>. The field of web development is constantly
          evolving, and it is essential to keep oneself informed about new tools, frameworks, and techniques. To stay
          up-to-date with the latest trends and technologies, I rely on various resources such as specialized news
          <span className="color-main">Telegram channels</span>, <span className="color-main">live streams</span>, and{' '}
          <span className="color-main">video tutorials on YouTube</span>.
        </p>
        <p>
          What has motivated me to continue learning and growing as a developer is the{' '}
          <span className="color-main">sense of creativity</span> and
          <span className="color-main">innovation that comes with being able to create something from scratch</span>.
          Whether it&apos;s a basic web page or a complex web application, the feeling of accomplishment that comes from
          seeing my work come to life is truly exhilarating. This sense of satisfaction and fulfillment has driven me to
          explore new technologies and techniques, and to constantly challenge myself to improve my skills. The ability
          to bring my ideas to life through programming is what inspires me to{' '}
          <span className="color-main">continue</span> on this journey of learning and growth.
        </p>
        <p>
          In the following articles, I will be sharing my <span className="color-main">painful experience</span> of
          getting acquainted with <span className="color-main">JavaScript</span> and my subsequent education at the
          <span className="color-main">online programming school Hexlet</span>. Thank you for reading!
        </p>
      </div>
    </div>
  );
};

export default BlogOne;
