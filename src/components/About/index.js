import React from 'react';
import './about.scss';

const About = () => {
  return (
    <div id="about-container">
      <div className="initial-summary-container">
        <section className="intial-section-wrapper">
          <p className="initial-summary-subtext">
            I am a creative front-end developer who enjoys designing and
            developing UI/UX web experiences with a focus on usability and
            prefers to work smart and hard, because hey, this is fun.
          </p>
          <span className="initial-summary-line-1" />
        </section>
        <div className="initial-summary-img" />
        <section className="intial-summary-description-container">
          <span className="initial-summary-line-2" />
          <p className="inital-summary-description">
            {' '}
            I have recently graduated from Turing School of Software and Design
            located in downtown Denver. Turing students invest over 1500 hours
            across seven months in becoming ready-made web developers. In the
            Front-End Engineering program, we began by building skills in HTML5,
            CSS3, JavaScript, jQuery, and Design Fundamentals.
          </p>
          <p className="inital-summary-description">
            We continued laying a solid foundation in Javascript from DOM
            manipulation to writing complex algorithms with a focus on ES2015,
            then progressed into React/Redux. In the final quarter, we focused
            on building backend applications with express/node and SQL through
            knex.js.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
