import React, { Component } from 'react';
import sizeMe from 'react-sizeme';
import StackGrid from 'react-stack-grid';
import { NavLink } from 'react-router-dom';
import Scroll from 'react-scroll';
import $ from 'jquery';
import './events.scss';
import './events.js';

class Events extends Component {
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

  handleOnClick(e) {
    $(e)
      .parents('.event-card-container')
      .find('img')
      .toggle();
    this.grid.updateLayout();
    $(e).toggleClass('open-event-card-container-open');
  }

  handleAddEventLink() {
    ///eventually only return if user has admin status
    return (
      <NavLink
        onClick={() => {
          this.scrollTop();
          this.scrollAfterSearch('add-event-container');
        }}
        to={'/addevent'}
        id="add-event-link"
      >
        Add Event
      </NavLink>
    );
  }

  render() {
    const { size: { width } } = this.props;

    return (
      <div id="events-container">
        {this.handleAddEventLink()}
        <div className="stack-grid-wrapper">
          <StackGrid
            gridRef={grid => (this.grid = grid)}
            monitorImagesLoaded={true}
            className="stack-grid"
            gutterWidth={10}
            gutterHeight={10}
            columnWidth={300}
            duration={600}
          >
            <div className="event-card-container">
              <div className="event-card-top">
                <div
                  className="open-event-click-open-btn "
                  onClick={e => {
                    this.handleOnClick(e.target);
                  }}
                >
                  <span className="open-event-click-line-1" />
                  <span className="open-event-click-line-2" />
                  <span className="open-event-click-line-3" />
                </div>
              </div>
              <img className="event-close" src="grr.png" />
            </div>
            <div className="event-card-container">
              <div className="event-card-top">
                <div
                  className="open-event-click-open-btn "
                  onClick={e => {
                    this.handleOnClick(e.target);
                  }}
                >
                  <span className="open-event-click-line-1" />
                  <span className="open-event-click-line-2" />
                  <span className="open-event-click-line-3" />
                </div>
              </div>
              <img className="event-close" src="grr.png" />
            </div>
            <div className="event-card-container">
              <div className="event-card-top">
                <div
                  className="open-event-click-open-btn "
                  onClick={e => {
                    this.handleOnClick(e.target);
                  }}
                >
                  <span className="open-event-click-line-1" />
                  <span className="open-event-click-line-2" />
                  <span className="open-event-click-line-3" />
                </div>
              </div>
              <img className="event-close" src="grr.png" />
            </div>
            <div className="event-card-container">
              <div className="event-card-top">
                <div
                  className="open-event-click-open-btn "
                  onClick={e => {
                    this.handleOnClick(e.target);
                  }}
                >
                  <span className="open-event-click-line-1" />
                  <span className="open-event-click-line-2" />
                  <span className="open-event-click-line-3" />
                </div>
              </div>
              <img className="event-close" src="grr.png" />
            </div>
            <div className="event-card-container">
              <div className="event-card-top">
                <div
                  className="open-event-click-open-btn "
                  onClick={e => {
                    this.handleOnClick(e.target);
                  }}
                >
                  <span className="open-event-click-line-1" />
                  <span className="open-event-click-line-2" />
                  <span className="open-event-click-line-3" />
                </div>
              </div>
              <img className="event-close" src="grr.png" />
            </div>
            <div className="event-card-container">
              <div className="event-card-top">
                <div
                  className="open-event-click-open-btn "
                  onClick={e => {
                    this.handleOnClick(e.target);
                  }}
                >
                  <span className="open-event-click-line-1" />
                  <span className="open-event-click-line-2" />
                  <span className="open-event-click-line-3" />
                </div>
              </div>
              <img className="event-close" src="grr.png" />
            </div>
            <div className="event-card-container">
              <div className="event-card-top">
                <div
                  className="open-event-click-open-btn "
                  onClick={e => {
                    this.handleOnClick(e.target);
                  }}
                >
                  <span className="open-event-click-line-1" />
                  <span className="open-event-click-line-2" />
                  <span className="open-event-click-line-3" />
                </div>
              </div>
              <img className="event-close" src="grr.png" />
            </div>
            <div className="event-card-container">
              <div className="event-card-top">
                <div
                  className="open-event-click-open-btn "
                  onClick={e => {
                    this.handleOnClick(e.target);
                  }}
                >
                  <span className="open-event-click-line-1" />
                  <span className="open-event-click-line-2" />
                  <span className="open-event-click-line-3" />
                </div>
              </div>
              <img className="event-close" src="grr.png" />
            </div>
            <div className="event-card-container">
              <div className="event-card-top">
                <div
                  className="open-event-click-open-btn "
                  onClick={e => {
                    this.handleOnClick(e.target);
                  }}
                >
                  <span className="open-event-click-line-1" />
                  <span className="open-event-click-line-2" />
                  <span className="open-event-click-line-3" />
                </div>
              </div>
              <img className="event-close" src="grr.png" />
            </div>
            <div className="event-card-container">
              <div className="event-card-top">
                <div
                  className="open-event-click-open-btn "
                  onClick={e => {
                    this.handleOnClick(e.target);
                  }}
                >
                  <span className="open-event-click-line-1" />
                  <span className="open-event-click-line-2" />
                  <span className="open-event-click-line-3" />
                </div>
              </div>
              <img className="event-close" src="grr.png" />
            </div>
            <div className="event-card-container">
              <div className="event-card-top">
                <div
                  className="open-event-click-open-btn "
                  onClick={e => {
                    this.handleOnClick(e.target);
                  }}
                >
                  <span className="open-event-click-line-1" />
                  <span className="open-event-click-line-2" />
                  <span className="open-event-click-line-3" />
                </div>
              </div>
              <img className="event-close" src="grr.png" />
            </div>
            <div className="event-card-container">
              <div className="event-card-top">
                <div
                  className="open-event-click-open-btn "
                  onClick={e => {
                    this.handleOnClick(e.target);
                  }}
                >
                  <span className="open-event-click-line-1" />
                  <span className="open-event-click-line-2" />
                  <span className="open-event-click-line-3" />
                </div>
              </div>
              <img className="event-close" src="grr.png" />
            </div>
            <div className="event-card-container">
              <div className="event-card-top">
                <div
                  className="open-event-click-open-btn "
                  onClick={e => {
                    this.handleOnClick(e.target);
                  }}
                >
                  <span className="open-event-click-line-1" />
                  <span className="open-event-click-line-2" />
                  <span className="open-event-click-line-3" />
                </div>
              </div>
              <img className="event-close" src="grr.png" />
            </div>
            <div className="event-card-container">
              <div className="event-card-top">
                <div
                  className="open-event-click-open-btn "
                  onClick={e => {
                    this.handleOnClick(e.target);
                  }}
                >
                  <span className="open-event-click-line-1" />
                  <span className="open-event-click-line-2" />
                  <span className="open-event-click-line-3" />
                </div>
              </div>
              <img className="event-close" src="grr.png" />
            </div>
            <div className="event-card-container">
              <div className="event-card-top">
                <div
                  className="open-event-click-open-btn "
                  onClick={e => {
                    this.handleOnClick(e.target);
                  }}
                >
                  <span className="open-event-click-line-1" />
                  <span className="open-event-click-line-2" />
                  <span className="open-event-click-line-3" />
                </div>
              </div>
              <img className="event-close" src="grr.png" />
            </div>
            <div className="event-card-container">
              <div className="event-card-top">
                <div
                  className="open-event-click-open-btn "
                  onClick={e => {
                    this.handleOnClick(e.target);
                  }}
                >
                  <span className="open-event-click-line-1" />
                  <span className="open-event-click-line-2" />
                  <span className="open-event-click-line-3" />
                </div>
              </div>
              <img className="event-close" src="grr.png" />
            </div>
            <div className="event-card-container">
              <div className="event-card-top">
                <div
                  className="open-event-click-open-btn "
                  onClick={e => {
                    this.handleOnClick(e.target);
                  }}
                >
                  <span className="open-event-click-line-1" />
                  <span className="open-event-click-line-2" />
                  <span className="open-event-click-line-3" />
                </div>
              </div>
              <img className="event-close" src="grr.png" />
            </div>
          </StackGrid>
        </div>
      </div>
    );
  }
}

export default sizeMe()(Events);
