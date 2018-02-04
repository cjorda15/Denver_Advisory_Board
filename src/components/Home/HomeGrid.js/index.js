import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Scroll from 'react-scroll';
import './home_grid.scss';

class HomeGrid extends Component {
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
      <section id="home-grid">
        <div className="landing-photo-container photo-container-bg-1">
          <div className="landing-photo-hidden-text-wrapper">
            <p className="landing-photo-hidden-text">puff puff give</p>
          </div>
          <div className="inital-block">Peer Advisory Group</div>
        </div>
        <div className="landing-photo-container photo-container-bg-2">
          <div className="landing-photo-hidden-text-wrapper">
            <p className="landing-photo-hidden-text">keep a weed journal</p>
          </div>
          <div className="inital-block">Community Service</div>
        </div>
        <div className="landing-photo-container photo-container-bg-3">
          <div className="landing-photo-hidden-text-wrapper">
            <p className="landing-photo-hidden-text">rate strains</p>
          </div>
          <div className="inital-block">Monthly Meetings</div>
        </div>
        <div className="landing-photo-container photo-container-bg-4">
          <div className="landing-photo-hidden-text-wrapper">
            <p className="landing-photo-hidden-text">
              recommend your favorites to your friends
            </p>
          </div>
          <div className="inital-block">Membership Directory</div>
        </div>
        <div className="landing-photo-container photo-container-bg-5">
          <div className="landing-photo-hidden-text-wrapper">
            <p className="landing-photo-hidden-text">upload awesome photos</p>
          </div>
          <div className="inital-block">Committees</div>
        </div>
        <div className="landing-photo-container photo-container-bg-6">
          <div className="landing-photo-hidden-text-wrapper">
            <p className="landing-photo-hidden-text">puff puff give</p>
          </div>
          <div className="inital-block">Programs</div>
        </div>
      </section>
    );
  }
}
export default HomeGrid;
