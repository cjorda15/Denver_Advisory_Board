import React, { Component } from 'react';
import './menu.scss';
import './menu.js';
import { NavLink } from 'react-router-dom';
import Scroll from 'react-scroll';

class Menu extends Component {
  constructor(props) {
    super(props);
  }

  scrollAfterSearch(input) {
    console.log('wiooo');
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
            this.scrollAfterSearch('landing-svg');
          }}
          className="nav-link"
          to={'/'}
        >
          home
        </NavLink>
        <NavLink
          onClick={() => {
            this.scrollAfterSearch('projects-container');
          }}
          className="nav-link"
          to={'/projects'}
        >
          projects
        </NavLink>
        <NavLink
          onClick={() => {
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
