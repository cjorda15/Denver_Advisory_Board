import React from 'react';
import './landing.scss';
import './landing.js';

const Landing = () => {
  return (
    <div className="video-wrapper">
      <video autoPlay playsInline muted loop preload="true">
        <source src="https://res.cloudinary.com/hdfmst19a/video/upload/v1517535883/people_1_v2epal.mp4" />
      </video>
      <svg
        id="landing-svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 285 80"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <mask id="mask" x="0" y="0">
            <rect
              style={{
                width: `100%`,
                fill: `white`,
                mask: `url(/add#mask)`,
                WebkitMask: `url(/add#mask)`
              }}
              className="landing-svg"
              x="0"
              y="0"
              width="100%"
              height="100%"
            />
            <text x="75" y="28">
              Denver
            </text>
            <text x="74" y="48">
              Advisory
            </text>
            <text x="75" y="68">
              Board
            </text>
          </mask>
        </defs>
        <rect className="landing-svg" x="0" y="0" width="100%" height="100%" />
      </svg>
    </div>
  );
};

export default Landing;
