import React from 'react';
import EventCarousel from './EventCarousel';

const EventCard = ({ event, handleOnClick, handleToggleEvent }) => {
  const presentParticipants = () => {
    return event.participants.length ? (
      <div>
        Participants:{event.participants.length}
        {event.participants.map((person, index) => {
          return <div key={index}>{person.name}</div>;
        })}
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
              handleToggleEvent(e, event._id, false);
            }}
          >
            attendEvent
          </button>
        </div>
      </div>
      <div className="event-close">
        <EventCarousel presentation={event.images} />
        <div className="event-inner-info-container">
          <p>
            <span>Located</span> {event.location}
          </p>
          <pre>
            <span>Summary</span> {event.summary}
          </pre>
          {presentParticipants()}
        </div>
      </div>
    </section>
  );
};

export default EventCard;
