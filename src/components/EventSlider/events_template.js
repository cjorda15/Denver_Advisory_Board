import React, { Component } from 'react';

class Event extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div
        className={`event ${this.props.intialClassName}`}
        style={{ backgroundImage: `url(${this.props.info.img}) ` }}
      >
        <div className="event-content">
          <div className="event-info">
            <h6 className="event-title">{this.props.info.title}</h6>
            <div className="event-links">
              <a href={this.props.info.liveLink}>
                <img src="icons/screen.svg" />
              </a>
              <a href={this.props.info.codeSrcLink}>
                <img src="icons/code.svg" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Event;
