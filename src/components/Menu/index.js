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
        <NavLink
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
          onClick={() => {
            this.scrollTop();
            this.scrollAfterSearch('about-container');
          }}
          className="nav-link"
          to={'/about'}
        >
          about me
        </NavLink>
      </div>
    );
  }
}

export default Menu;
