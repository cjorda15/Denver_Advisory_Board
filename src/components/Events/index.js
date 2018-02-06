import React, { Component } from 'react';
import sizeMe from 'react-sizeme';
import StackGrid from 'react-stack-grid';
import $ from 'jquery';
import './events.scss';
class Events extends Component {
  constructor() {
    super();
  }

  handleOnClick(e) {
    $(e)
      .parent('.events-card-container')
      .find('img')
      .toggle();
    this.grid.updateLayout();
    console.log('!@#!@#!@#');
  }

  render() {
    const { size: { width } } = this.props;

    return (
      <div id="events-container">
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
            <div className="events-card-container">
              <span
                className="event-hover-open-btn"
                onClick={e => {
                  this.handleOnClick(e.target);
                }}
              >
                title
              </span>
              <img className="event-close" src="grr.png" />{' '}
            </div>
            <div className="events-card-container">
              <span
                className="event-hover-open-btn"
                onClick={e => {
                  this.handleOnClick(e.target);
                }}
              >
                title
              </span>
              <img className="event-close" src="grr.png" />{' '}
            </div>
            <div className="events-card-container">
              <span
                className="event-hover-open-btn"
                onClick={e => {
                  this.handleOnClick(e.target);
                }}
              >
                title
              </span>
              <img className="event-close" src="grr.png" />{' '}
            </div>
            <div className="events-card-container">
              <span
                className="event-hover-open-btn"
                onClick={e => {
                  this.handleOnClick(e.target);
                }}
              >
                title
              </span>
              <img className="event-close" src="grr.png" />{' '}
            </div>
            <div className="events-card-container">
              <span
                className="event-hover-open-btn"
                onClick={e => {
                  this.handleOnClick(e.target);
                }}
              >
                title
              </span>
              <img className="event-close" src="grr.png" />{' '}
            </div>
            <div className="events-card-container">
              <span
                className="event-hover-open-btn"
                onClick={e => {
                  this.handleOnClick(e.target);
                }}
              >
                title
              </span>
              <img className="event-close" src="grr.png" />{' '}
            </div>
          </StackGrid>
        </div>
      </div>
    );
  }
}

export default sizeMe()(Events);
