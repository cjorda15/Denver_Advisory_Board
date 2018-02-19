import React from 'react';
import EventCarousel from './EventCarousel';

const EventCard = ({ event, handleOnClick }) => {
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
        </div>
      </div>
      <div className="event-close">
        <EventCarousel presentation={event.images} />
        <p>{event.location}</p>
        <p>{event.summary}</p>
      </div>
    </section>
  );
};

export default EventCard;
