import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Scroll from 'react-scroll';
import './LrgNav.scss';
import './LrgNav.js';
class LrgNav extends Component {
  constructor() {
    super();
  }

  scrollAfterSearch(input) {
    setTimeout(() => {
      return Scroll.scroller.scrollTo(input, {
        duration: 1000,
        delay: 70,
        smooth: true
      });
    }, 100);
  }
  render() {
    return (
      <nav className="lrg-nav-container">
        <NavLink
          onClick={() => {
            this.scrollAfterSearch('home-container');
          }}
          className="lrg-nav-link"
          to={'/'}
        >
          <div className="lrg-nav-svg-wrapper">
            <svg height="60" width="120" xmlns="http://www.w3.org/2000/svg">
              <rect className="lrg-nav-shape" height="60" width="120" />
            </svg>
            <div className="lrg-menu-link-text">HOME</div>
          </div>
        </NavLink>
        <NavLink
          onClick={() => {
            this.scrollAfterSearch('home-container');
          }}
          className="lrg-nav-link"
          to={'/about'}
        >
          <div className="lrg-nav-svg-wrapper">
            <svg height="60" width="120" xmlns="http://www.w3.org/2000/svg">
              <rect className="lrg-nav-shape" height="60" width="120" />
            </svg>
            <div className="lrg-menu-link-text">ABOUT</div>
          </div>
        </NavLink>
        <NavLink
          onClick={() => {
            this.scrollAfterSearch('home-container');
          }}
          className="lrg-nav-link"
          to={'/events'}
        >
          <div className="lrg-nav-svg-wrapper">
            <svg height="60" width="120" xmlns="http://www.w3.org/2000/svg">
              <rect className="lrg-nav-shape" height="60" width="120" />
            </svg>
            <div className="lrg-menu-link-text">EVENTS</div>
          </div>
        </NavLink>
        <NavLink
          onClick={() => {
            this.scrollAfterSearch('home-container');
          }}
          className="lrg-nav-link"
          to={'/login'}
        >
          <div className="lrg-nav-svg-wrapper">
            <svg height="60" width="120" xmlns="http://www.w3.org/2000/svg">
              <rect className="lrg-nav-shape" height="60" width="120" />
            </svg>
            <div className="lrg-menu-link-text">Log</div>
          </div>
        </NavLink>
      </nav>
    );
  }
}

export default LrgNav;
