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
      <EventSlider />
    </div>
  );
};
export default Home;
