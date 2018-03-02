import React from 'react';
import './about.scss';
import { Link } from 'react-router-dom'

const About = () => {
return (
  <div id="about-container">
    <span className="divider-span"></span>
    <h2 id="about-title">About the DAB</h2>
    <span className="divider-span"></span>
    <p>In 1992 the Denver Advisory Board (DAB) was founded with the purpose of bringing business and community leaders together and promoting the development of new relationships that bring value to their organizations as well as the community.</p>
    <p>We meet the 2nd Tuesday of every month. We also have additional social events three times a year. To see upcoming events visit the <Link to="/events">events</Link> page</p>
  </div>
  );
};

export default About;
