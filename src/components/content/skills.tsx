import React from 'react';
import { AiOutlineFire } from 'react-icons/ai';

const Skills = () => {
  return (
    <div className="skills-container">
      <h1 className="title">
        Ski<span className="color-main">ll</span>s
      </h1>

      <div className="skills-list">
        <div className="skills-item">
          <h4 className="skills-item-name color-main">
            <AiOutlineFire />
            React
          </h4>
          <p>
            Proficient in <span className="color-main">React</span>, with experience in both{' '}
            <span className="color-main">class and functional components</span>, as well as expertise in React Hooks and
            JSX. Prioritizing writing concise and maintainable code to build <span className="color-main">dynamic</span>{' '}
            and interactive user interfaces.
          </p>
        </div>

        <div className="skills-item">
          <h4 className="skills-item-name color-main">
            <AiOutlineFire />
            Javascript
          </h4>
          <p>
            I absolutely adore tackling algorithmic challenges on <span className="color-main">Codewars</span> -
            there&apos;s something thrilling about the rush of solving a particularly tough kata! I&apos;m always on the
            lookout for new and innovative approaches to working with the{' '}
            <span className="color-main">JavaScript programming language</span>, and I love experimenting with different
            techniques and strategies to see what works best.
          </p>
        </div>

        <div className="skills-item">
          <h4 className="skills-item-name color-main">
            <AiOutlineFire />
            HTML
          </h4>
          <p>
            I possess a wealth of expertise in crafting moderately intricate layouts utilizing HTML, while also
            acquiring knowledge of <span className="color-main">semantic and responsive web design principles</span>.
            HTML served as the foundation for my initiation into the world of{' '}
            <span className="color-main">front-end</span> development.
          </p>
        </div>

        <div className="skills-item">
          <h4 className="skills-item-name color-main">
            <AiOutlineFire />
            CSS
          </h4>
          <p>
            I have honed my skills in crafting visually appealing styles for web pages through extensive practice with
            <span className="color-main">CSS</span>. Furthermore, I am actively pursuing the mastery of{' '}
            <span className="color-main">SCSS</span>, as it enables{' '}
            <span className="color-main">faster and higher-quality development</span>.
          </p>
        </div>

        <div className="skills-item">
          <h4 className="skills-item-name color-main">
            <AiOutlineFire />
            Typescript
          </h4>
          <p>
            With my expertise in <span className="color-main">TypeScript</span>, I am able to develop robust and
            maintainable code that provides superior scalability and <span className="color-main">type safety</span>. My
            proficiency in this language allows me to easily navigate complex projects, while also enhancing
            productivity and <span className="color-main">minimizing errors</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
