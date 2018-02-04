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
            <p className="landing-photo-hidden-text">
              One of the most valuable benefits of the Denver Advisory Board is
              the opportunity to join a Peer Advisory Group.
            </p>
            <a className="grid-link" href="/">
              Learn More
            </a>
          </div>
          <h6 className="inital-block">Peer Advisory Group</h6>
        </div>
        <div className="landing-photo-container photo-container-bg-2">
          <div className="landing-photo-hidden-text-wrapper">
            <p className="landing-photo-hidden-text">
              One of our primary purposes was to bring value to the community in
              which its members live and work. Today, that is still an important
              hallmark of the organization.
            </p>
            <a className="grid-link" href="/">
              Learn More
            </a>
          </div>
          <h6 className="inital-block">Community Service</h6>
        </div>
        <div className="landing-photo-container photo-container-bg-3">
          <div className="landing-photo-hidden-text-wrapper">
            <p className="landing-photo-hidden-text">
              We meet at the Downtown Aquarium on the 2nd Tuesday of every month
              and we welcome guests!
            </p>
            <a className="grid-link" href="/">
              Learn More
            </a>
          </div>
          <h6 className="inital-block">Monthly Meetings</h6>
        </div>
        <div className="landing-photo-container photo-container-bg-4">
          <div className="landing-photo-hidden-text-wrapper">
            <p className="landing-photo-hidden-text">
              Come see our list of members
            </p>
            <a className="grid-link" href="/">
              Learn More
            </a>
          </div>
          <h6 className="inital-block">Membership Directory</h6>
        </div>
        <div className="landing-photo-container photo-container-bg-5">
          <div className="landing-photo-hidden-text-wrapper">
            <p className="landing-photo-hidden-text">
              Check out our Commitee Chairs
            </p>
            <a className="grid-link" href="/">
              Learn More
            </a>
          </div>
          <h6 className="inital-block">Committees</h6>
        </div>
        <div className="landing-photo-container photo-container-bg-6">
          <div className="landing-photo-hidden-text-wrapper">
            <p className="landing-photo-hidden-text">
              The DAB is always looking to bring in speakers that add value to
              our members. Interested in being a speaker?
            </p>
            <a className="grid-link" href="/">
              Learn More
            </a>
          </div>
          <h6 className="inital-block">Programs</h6>
        </div>
      </section>
    );
  }
}
export default HomeGrid;
