import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Scroll from 'react-scroll';
import './LrgNav.scss';
class LrgNav extends Component {
  constructor() {
    super();
  }

  scrollTop() {
    setTimeout(() => {
      return Scroll.scroller.scrollTo('landing-svg', {
        duration: 0,
        delay: 0,
        smooth: false
      });
    }, 0);
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
            this.scrollTop();
            this.scrollAfterSearch('home-container');
          }}
          className="lrg-nav-link"
          to={'/'}
        >
          <div className="svg-wrapper">
            <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
              <rect className="shape" height="60" width="320" />
            </svg>
            <div className="lrg-menu-link-text">HOME</div>
          </div>
        </NavLink>
      </nav>
    );
  }
}

export default LrgNav;
