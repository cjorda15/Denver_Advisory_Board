import React, { Component } from 'react';
import ProfileEventsCarousel from './ProfileEventsCarousel';
import './profile_events_list.scss';
class ProfileEventsList extends Component {
  constructor(props) {
    super(props);
  }

  removeEvent(eventID) {
    this.props.setParentState({ activeEvents: [] });
    fetch(`/api/v1/events/${this.props.user.userID._id}`, {
      method: 'PATCH',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ event: eventID })
    })
      .then(response => response.json())
      .then(response => {
        this.props.handleUpdateParticipant({
          eventId: eventID,
          user: this.props.user.userID
        });
      })
      .catch(err => console.log(err, ' ERROR'));
  }

  renderEvents() {
    return this.props.events && this.props.events.length ? (
      <section className="profile-events-list-container">
        {this.props.events.map((event, index) => {
          return (
            <div className="profile-events-card-holder" key={index}>
              <div>{event.title}</div>
              <div>{event.date}</div>
              <ProfileEventsCarousel presentation={event.images} />
              <div>{event.summary}</div>
              <button
                onClick={e => {
                  this.removeEvent(event._id);
                }}
              >
                Unattend Event
              </button>
            </div>
          );
        })}
      </section>
    ) : null;
  }

  render() {
    return <div className="profile-events-list">{this.renderEvents()}</div>;
  }
}

export default ProfileEventsList;
