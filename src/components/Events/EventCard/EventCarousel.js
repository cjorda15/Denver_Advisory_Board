import React, { Component } from 'react';
import { determineFormat } from './helper';

class EventCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
      currentNumber: 0
    };
  }

  componentWillMount() {
    this.setState({
      files: this.props.presentation
    });
  }

  handlePresentation() {
    if (!this.state.files.length) return null;
    return this.state.files.map((file, index) => {
      let info = determineFormat(file);
      return this.createPresentation(
        file,
        info.type,
        info.format,
        index,
        this.state.currentNumber
      );
    });
  }

  createPresentation(file, fileType, format, indexNumber, currentNumber) {
    let isActive =
      indexNumber === currentNumber
        ? 'active-event-file'
        : 'not-active-event-file';
    if (fileType == 'image') {
      return this.createImage(file, isActive, indexNumber);
    }
    if (fileType == 'video') {
      return this.createVideo(file, format, isActive, indexNumber);
    }
    return <div key={indexNumber}>error creating image or video</div>;
  }

  createImage(file, isActive, indexNumber) {
    return (
      <img
        key={indexNumber}
        className={isActive}
        width="300"
        height="240"
        src={file}
      />
    );
  }

  createVideo(file, format, isActive, indexNumber) {
    return (
      <video
        key={indexNumber}
        className={isActive}
        width="300"
        height="240"
        autoPlay
        controls
        preload="true"
        loop
      >
        <source src={file} type={`video/${format}`} />
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
    if (direction == 'right' && counter < this.state.files.length - 1) {
      counter = counter + 1;
      this.setState({ currentNumber: counter });
    }
  }

  render() {
    return (
      <div className="event-carousel-container">
        <button
          onClick={() => {
            this.handleClick('left');
          }}
        >
          &larr;
        </button>
        {this.handlePresentation()}
        <button
          onClick={() => {
            this.handleClick('right');
          }}
        >
          {' '}
          &rarr;
        </button>
      </div>
    );
  }
}

export default EventCarousel;
