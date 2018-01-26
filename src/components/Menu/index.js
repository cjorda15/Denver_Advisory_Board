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
              this.scrollAfterSearch('landing-svg');
            }}
            className="nav-link"
            to={'/'}
          >
            home
          </NavLink>
          <NavLink
            id="nav-link-2"
            onClick={() => {
              this.scrollTop();
              this.scrollAfterSearch('projects-container');
            }}
            className="nav-link"
            to={'/projects'}
          >
            projects
          </NavLink>
          <NavLink
            id="nav-link-3"
            onClick={() => {
              this.scrollTop();
              this.scrollAfterSearch('about-container');
            }}
            className="nav-link"
            to={'/about'}
          >
            about me
          </NavLink>
        </nav>
      </div>
    );
  }
}

export default Menu;
