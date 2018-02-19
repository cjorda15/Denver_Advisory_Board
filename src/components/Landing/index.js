import React from 'react';
import './landing.scss';
import './landing.js';

const Landing = () => {
  return (
    <div className="video-wrapper">
      <img
        width="100%"
        src="https://res.cloudinary.com/hdfmst19a/image/upload/v1518751751/pexels-photo-221502_1_ppqftz.jpg"
      />
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
