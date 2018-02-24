import React, { Component } from 'react';
import sizeMe from 'react-sizeme';
import StackGrid from 'react-stack-grid';
import { NavLink } from 'react-router-dom';
import Scroll from 'react-scroll';
import { connect, compose } from 'react-redux';
import $ from 'jquery';
import moment from 'moment';
import EventCard from './EventCard';
import { gatherEvents, updateParticipant } from '../../actions';
import './events.scss';
import './events.js';

class Events extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    fetch('/api/v1/events', {
      method: 'GET',
      credentials: 'include'
    })
      .then(data => data.json())
      .then(events => {
        this.props.handleGatherEvents(events);
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
    fetch('/api/v1/events', {
      method: 'PATCH',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ event: eventId })
    })
      .then(response => response.json())
      .then(response =>
        this.props.handleUpdateParticipant({
          eventId: eventId,
          user: this.props.user
        })
      )
      .catch(err => console.log(err, ' ERROR'));
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
    return this.props.events
      ? this.props.events.map((event, index) => (
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

const mapStateToProps = state => {
  return {
    events: state.events,
    user: state.user.userID
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleGatherEvents: input => {
      dispatch(gatherEvents(input));
    },
    handleUpdateParticipant: input => {
      dispatch(updateParticipant(input));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(sizeMe()(Events));
