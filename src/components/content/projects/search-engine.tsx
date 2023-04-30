import React from 'react';
import { GiClick } from 'react-icons/gi';
import { MdViewInAr } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Search = () => {
  return (
    <div className="projects-list-item">
      <div className="project-item-name">
        <h3 className="project-name">Search Engine</h3>
        <Link to="/projects/drum" className="color-main size">
          <GiClick />
        </Link>
      </div>

      <div className="projects-skills">
        <p>
          The main objective of the project was to build a <span className="color-main">search engine</span> by applying
          various <span className="color-main">search methods</span>, indexing, ranking,{' '}
          <span className="color-main">relevance metrics</span> and constructing an inverted index.
        </p>
        <p>
          The architecture of the search engine was based on an{' '}
          <span className="color-main">inverted index approach</span> which speeds up the search time by several times.
          I learned how to properly abstract data and work with special data structures. This allowed me to scale and
          optimize the project.
        </p>
        <p>By building the search engine, I gained valuable experience in:</p>
        <ul>
          <li>
            <span className="color-main">• </span> Parsing raw data from various sources
          </li>
          <li>
            <span className="color-main">• </span> Implementing <span className="color-main">search algorithms</span>{' '}
            like <span className="color-main">TF-IDF</span> to rank results
          </li>
          <li>
            <span className="color-main">• </span> Optimizing the search process by using an inverted index
          </li>
          <li>
            <span className="color-main">• </span> Improving search relevance through{' '}
            <span className="color-main">query expansion</span>
          </li>
        </ul>
        <a href="https://github.com/yaroslavskiba/algorithms-project-69" target="blank" className="button-main">
          View <MdViewInAr />
        </a>
      </div>
    </div>
  );
};

export default Search;
