import React from 'react';
import './landing.scss';
import './landing.js';

const Landing = () => {
  return (
    <header>
      <video
        autoPlay
        playsInline
        muted
        loop
        preload="true"
        poster="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/oceanshot.jpg"
      >
        <source src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/ocean-small.webm" />
        <source src="http://thenewcode.com/assets/videos/ocean-small.mp4" />
      </video>
      <svg
        id="landing-svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 285 80"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <mask id="mask" x="0" y="0" width="100vw" height="100vw">
            <rect
              className="landing-svg"
              x="0"
              y="0"
              width="100%"
              height="100%"
            />
            <text x="90" y="30">
              CHRIS
            </text>
            <text x="75" y="60">
              JORDAN
            </text>
          </mask>
        </defs>
        <rect className="landing-svg" x="0" y="0" width="100%" height="100%" />
      </svg>
    </header>
  );
};

export default Landing;
