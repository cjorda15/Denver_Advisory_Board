import React from 'react';
import './burger.scss';
import './burger.js';

const Burger = () => {
  return (
    <div className="wrapper">
      <button className="burger">
        <svg
          id="burger-svg"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 50"
        >
          <title>Show / Hide Navigation</title>
          <rect
            className="burger-svg__base"
            width="50"
            height="50"
            fill="#1f201c"
          />
          <g className="burger-svg__bars" fill="#fff">
            <rect
              className="burger-svg__bar burger-svg__bar-1"
              x="14"
              y="18"
              width="22"
              height="2"
            />
            <rect
              className="burger-svg__bar burger-svg__bar-2"
              x="14"
              y="24"
              width="22"
              height="2"
            />
            <rect
              className="burger-svg__bar burger-svg__bar-3"
              x="14"
              y="30"
              width="22"
              height="2"
            />
          </g>
        </svg>
      </button>
    </div>
  );
};

export default Burger;
