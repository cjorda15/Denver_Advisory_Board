import React from 'react';
import EventCarousel from './EventCarousel';

const EventCard = ({ user, event, handleOnClick, handleToggleEvent }) => {
  const determineAttendence = () => {
    if (!user) {
      return 'Attend Event';
    }
    let participantsList = event.participants.map(
      participant => participant._id
    );

    return participantsList.includes(user.userID._id)
      ? 'Unattend Event'
      : 'Attend Event';
  };

  const presentParticipants = () => {
    return event.participants.length ? (
      <div className="attendeance-cards-container">
        <div className="attendance-parcipants-container">
          <div className="attendance-parcipants-count">
            Participants:{event.participants.length}
          </div>
          {event.participants.map((person, index) => {
            return (
              <div className="attendee-basic-summary" key={index}>
                <div className="attendee-basic-summary-content">
                  <img className="attendee-image" src={person.image.url} />
                  <p> {person.name}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    ) : (
      <div>Participants:0</div>
    );
  };
  return (
    <section className="event-card-container">
      <div className="event-card-top">
        <div
          className="open-event-click-open-btn "
          onClick={e => {
            handleOnClick(e.target);
          }}
        >
          <span className="open-event-click-line-1" />
          <span className="open-event-click-line-2" />
          <span className="open-event-click-line-3" />
        </div>
        <div className="event-basic-info-container">
          <div />
          <h6>{event.title}</h6>
          <p>{event.date}</p>
          <button
            className="attend-event-btn"
            onClick={e => {
              handleToggleEvent(e, event._id);
            }}
          >
            {determineAttendence()}
          </button>
        </div>
      </div>
      <div className="event-close">
        <EventCarousel presentation={event.images} />
        <div className="event-inner-info-container">
          <p>
            <span>Located</span> {event.location}
          </p>
          <div>{presentParticipants()}</div>
          <pre>
            <span>Summary</span> {event.summary}
          </pre>
        </div>
      </div>
    </section>
  );
};

export default EventCard;
