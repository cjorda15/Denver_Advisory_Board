import React, { Component } from 'react';
import './profile_events_carousel.scss';
class ProfileEventCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentNumber: 0
    };
  }

  handlePresentation() {
    if (!this.props.presentation.length) return null;
    return this.props.presentation.map((file, index) => {
      return this.createPresentation(file, index, this.state.currentNumber);
    });
  }

  createPresentation(file, indexNumber, currentNumber) {
    let isActive =
      indexNumber === currentNumber
        ? 'active-profile-event-file'
        : 'not-active-profile-event-file';
    if (file.type == 'image') {
      return this.createImage(file, isActive, indexNumber);
    }
    if (file.type == 'video') {
      return this.createVideo(file, isActive, indexNumber);
    }
    return <div key={indexNumber}>error creating image or video</div>;
  }
  createImage(file, isActive, indexNumber) {
    return (
      <div
        className={`profile-event-image-background ${isActive}`}
        key={indexNumber}
        style={{ backgroundImage: `url("${file.url}")` }}
      />
    );
  }

  createVideo(file, isActive, indexNumber) {
    return (
      <video
        key={indexNumber}
        className={isActive}
        width="100%"
        height="240"
        controls
        preload="true"
      >
        <source src={file.url} type={`video/${file.format}`} />
        Your browser does not support the video tag.
      </video>
    );
  }

  handleClick(direction) {
    let counter = this.state.currentNumber;
    if (direction == 'left' && counter > 0) {
      counter = counter - 1;
      this.setState({ currentNumber: counter });
    }
    if (direction == 'right' && counter < this.props.presentation.length - 1) {
      counter = counter + 1;
      this.setState({ currentNumber: counter });
    }
  }

  showButtons() {
    return this.props.presentation.length <= 1 ? null : (
      <div className="profile-event-change-presentation-btn-container">
        <button
          className="profile-event-change-presentation-left-btn"
          onClick={() => {
            this.handleClick('left');
          }}
        >
          &larr;
        </button>
        <button
          className="profile-event-change-presentation-right-btn"
          onClick={() => {
            this.handleClick('right');
          }}
        >
          &rarr;
        </button>
      </div>
    );
  }

  render() {
    return (
      <div className="profile-event-carousel-container">
        {this.showButtons()}
        {this.handlePresentation()}
      </div>
    );
  }
}

export default ProfileEventCarousel;
