import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions';
import './LrgNav.scss';
import './LrgNav.js';

class LrgNav extends Component {
  constructor(props) {
    super(props);
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
      <NavLink className="lrg-nav-link" to={'/login'}>
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
      <NavLink className="lrg-nav-link" to={'/profile'}>
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
        <NavLink className="lrg-nav-link" to={'/'}>
          <div className="lrg-nav-svg-wrapper">
            <svg height="60" width="140" xmlns="http://www.w3.org/2000/svg">
              <rect className="lrg-nav-shape" height="60" width="140" />
            </svg>
            <div className="lrg-menu-link-text">HOME</div>
          </div>
        </NavLink>
        <NavLink className="lrg-nav-link" to={'/about'}>
          <div className="lrg-nav-svg-wrapper">
            <svg height="60" width="140" xmlns="http://www.w3.org/2000/svg">
              <rect className="lrg-nav-shape" height="60" width="140" />
            </svg>
            <div className="lrg-menu-link-text">ABOUT</div>
          </div>
        </NavLink>
        <NavLink className="lrg-nav-link" to={'/events'}>
          <div className="lrg-nav-svg-wrapper">
            <svg height="60" width="140" xmlns="http://www.w3.org/2000/svg">
              <rect className="lrg-nav-shape" height="60" width="140" />
            </svg>
            <div className="lrg-menu-link-text">EVENTS</div>
          </div>
        </NavLink>
        {this.showProfile()}
        {this.signedIn()}
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
