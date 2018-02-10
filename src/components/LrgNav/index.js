import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Scroll from 'react-scroll';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions';
import './LrgNav.scss';
import './LrgNav.js';

class LrgNav extends Component {
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
          fetch('/api/v1/logout', {
            method: 'GET',
            credentials: 'include'
          });
          this.props.handleLogout();
          this.scrollTop();
          this.scrollAfterSearch('home-container');
        }}
        className="lrg-nav-link"
        to={'/'}
      >
        <div className="lrg-nav-svg-wrapper">
          <svg height="60" width="140" xmlns="http://www.w3.org/2000/svg">
            <rect className="lrg-nav-shape" height="60" width="140" />
          </svg>
          <div className="lrg-menu-link-text">LOGOUT</div>
        </div>
      </NavLink>
    ) : (
      <NavLink
        onClick={() => {
          this.scrollTop();
          this.scrollAfterSearch('login-signup-container');
        }}
        className="lrg-nav-link"
        to={'/login'}
      >
        <div className="lrg-nav-svg-wrapper">
          <svg height="60" width="140" xmlns="http://www.w3.org/2000/svg">
            <rect className="lrg-nav-shape" height="60" width="140" />
          </svg>
          <div className="lrg-menu-link-text">LOGIN</div>
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
        className="lrg-nav-link"
        to={'/profile'}
      >
        <div className="lrg-nav-svg-wrapper">
          <svg height="60" width="140" xmlns="http://www.w3.org/2000/svg">
            <rect className="lrg-nav-shape" height="60" width="140" />
          </svg>
          <div className="lrg-menu-link-text">PROFILE</div>
        </div>
      </NavLink>
    ) : null;
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
            <svg height="60" width="140" xmlns="http://www.w3.org/2000/svg">
              <rect className="lrg-nav-shape" height="60" width="140" />
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
            <svg height="60" width="140" xmlns="http://www.w3.org/2000/svg">
              <rect className="lrg-nav-shape" height="60" width="140" />
            </svg>
            <div className="lrg-menu-link-text">ABOUT</div>
          </div>
        </NavLink>
        <NavLink
          onClick={() => {
            this.scrollAfterSearch('events-container');
          }}
          className="lrg-nav-link"
          to={'/events'}
        >
          <div className="lrg-nav-svg-wrapper">
            <svg height="60" width="140" xmlns="http://www.w3.org/2000/svg">
              <rect className="lrg-nav-shape" height="60" width="140" />
            </svg>
            <div className="lrg-menu-link-text">EVENTS</div>
          </div>
        </NavLink>
        {this.signedIn()}
        {this.showProfile()}
      </nav>
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

export default connect(mapStateToProps, mapDispatchToProps)(LrgNav);
