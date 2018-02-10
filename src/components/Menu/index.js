import React, { Component } from 'react';
import './menu.scss';
import './menu.js';
import { NavLink } from 'react-router-dom';
import Scroll from 'react-scroll';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions';

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
  signedIn() {
    return this.props.user ? (
      <NavLink
        onClick={() => {
          this.props.handleLogout();
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
          <div className="menu-link-text">LOGOUT</div>
        </div>
      </NavLink>
    ) : (
      <NavLink
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
          <div className="menu-link-text">LOGIN</div>
        </div>
      </NavLink>
    );
  }

  showProfile() {
    return this.props.user ? (
      <NavLink
        onClick={() => {
          this.scrollTop();
          this.scrollAfterSearch('profile-container');
        }}
        className="nav-link"
        to={'/profile'}
      >
        <div className="svg-wrapper">
          <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
            <rect className="shape" height="60" width="320" />
          </svg>
          <div className="menu-link-text">PROFILE</div>
        </div>
      </NavLink>
    ) : null;
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
              this.scrollAfterSearch('events-container');
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
          {this.signedIn()}
          {this.showProfile()}
        </nav>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleLogout: () => {
      dispatch(logoutUser());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
