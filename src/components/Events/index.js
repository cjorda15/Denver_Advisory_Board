import React, { Component } from 'react';
import sizeMe from 'react-sizeme';
import StackGrid from 'react-stack-grid';
import { NavLink } from 'react-router-dom';
import Scroll from 'react-scroll';
import $ from 'jquery';
import moment from 'moment';
import EventCard from './EventCard';
import './events.scss';
import './events.js';

class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    };
  }

  componentDidMount() {
    fetch('/api/v1/events', {
      method: 'GET',
      credentials: 'include'
    })
      .then(data => data.json())
      .then(events => {
        this.setState({ events: events });
      })
      .catch(err => console.log(err));
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
      .find('.event-close')
      .toggle();
    this.grid.updateLayout();
    $(e).toggleClass('open-event-card-container-open');
  }

  toggleEvent(e, eventId, attending) {
    e.preventDefault();
    attending ? this.unattendEvent(eventId) : this.attendEvent(eventId);
  }

  attendEvent(eventId) {
    console.log('ATTENDING', eventId);
  }

  unattendEvent() {
    console.log('UNATTENDING', eventId);
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

  renderEvents() {
    return this.state.events
      ? this.state.events.map((event, index) => (
          <EventCard
            handleToggleEvent={this.toggleEvent.bind(this)}
            handleOnClick={this.handleOnClick.bind(this)}
            key={index}
            event={event}
          />
        ))
      : null;
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
            {this.renderEvents()}
          </StackGrid>
        </div>
      </div>
    );
  }
}

export default sizeMe()(Events);
