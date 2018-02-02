import React, { Component } from 'react';
import './home.scss';
import EventSlider from '../EventSlider';

const Home = () => {
  return (
    <div id="home-container">
      <h3>
        We believe in creating and growing professional friendships resulting in
        personal & business success.
      </h3>
      <section className="home-page-section-1">
        <EventSlider />
        <p>come check us out at one of our events!</p>
      </section>
    </div>
  );
};
export default Home;
