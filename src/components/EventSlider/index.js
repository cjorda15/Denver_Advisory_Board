import React, { Component } from 'react';
import Event from './events_template';
import './events-slider.scss';
import $ from 'jquery';

const events = [
  {
    title: 'color your day',
    img: `http://lorempixel.com/400/200`
  },
  {
    title: 'CSS/jQuery Fun',
    img: `http://lorempixel.com/400/200`
  },
  {
    title: 'Static Site',
    img: `http://lorempixel.com/400/200`
  }
];

class EventSlider extends Component {
  constructor() {
    super();
    this.state = {
      listLength: events.length - 1,
      currentNumber: 0
    };
  }

  handleClick(direction) {
    console.log('!!!');
    let counter = this.state.currentNumber;
    if (direction == 'left' && counter > 0) {
      counter = counter - 1;
      this.setState({ currentNumber: counter });
      $('.event')[counter].classList.remove('not-active-event');
      $('.event')[counter].classList.add('active-event');
      $('.event')[counter + 1].classList.add('not-active-event');
      $('.event')[counter + 1].classList.remove('active-event');
    }
    if (direction == 'right' && counter < this.state.listLength) {
      counter = counter + 1;
      this.setState({ currentNumber: counter });
      $('.event')[counter].classList.remove('not-active-event');
      $('.event')[counter].classList.add('active-event');
      $('.event')[counter - 1].classList.add('not-active-event');
      $('.event')[counter - 1].classList.remove('active-event');
    }
  }

  renderEvents() {
    return (
      <div className="events">
        <span
          onClick={() => {
            this.handleClick('left');
          }}
          className="events-btn"
        >
          &larr;
        </span>
        {events.map((info, i) => {
          return i == 0 ? (
            <Event intialClassName={'active-event'} info={info} key={i} />
          ) : (
            <Event intialClassName={'not-active-event'} info={info} key={i} />
          );
        })}
        <span
          onClick={() => {
            this.handleClick('right');
          }}
          className="events-btn"
        >
          &rarr;
        </span>
      </div>
    );
  }

  render() {
    return <article className="events-wrapper">{this.renderEvents()}</article>;
  }
}
export default EventSlider;
