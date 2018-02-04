import React, { Component } from 'react';
import './menu.scss';
import './menu.js';
import { NavLink } from 'react-router-dom';
import Scroll from 'react-scroll';

class Menu extends Component {
  constructor(props) {
    super(props);
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
      <div id="menu">
        <nav>
          <NavLink
            id="nav-link-1"
            onClick={() => {
              this.scrollTop();
              this.scrollAfterSearch('home-container');
            }}
            className="nav-link"
            to={'/'}
          >
            <div className="svg-wrapper">
              <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
                <rect className="shape" height="60" width="320" />
              </svg>
              <div className="menu-link-text">HOME</div>
            </div>
          </NavLink>
          <NavLink
            id="nav-link-2"
            onClick={() => {
              this.scrollTop();
              this.scrollAfterSearch('projects-container');
            }}
            className="nav-link"
            to={'/about'}
          >
            <div className="svg-wrapper">
              <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
                <rect className="shape" height="60" width="320" />
              </svg>
              <div className="menu-link-text">ABOUT</div>
            </div>
          </NavLink>
          <NavLink
            id="nav-link-3"
            onClick={() => {
              this.scrollTop();
              this.scrollAfterSearch('about-container');
            }}
            className="nav-link"
            to={'/events'}
          >
            <div className="svg-wrapper">
              <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
                <rect className="shape" height="60" width="320" />
              </svg>
              <div className="menu-link-text">EVENTS</div>
            </div>
          </NavLink>
          <NavLink
            id="nav-link-4"
            onClick={() => {
              this.scrollTop();
              this.scrollAfterSearch('login-signup-container');
            }}
            className="nav-link"
            to={'/login'}
          >
            <div className="svg-wrapper">
              <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
                <rect className="shape" height="60" width="320" />
              </svg>
              <div className="menu-link-text">login</div>
            </div>
          </NavLink>
        </nav>
      </div>
    );
  }
}

export default Menu;
