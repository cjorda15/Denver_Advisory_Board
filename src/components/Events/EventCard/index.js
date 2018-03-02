import React from 'react';
import EventCarousel from './EventCarousel';

const EventCard = ({
  user,
  eventData,
  handleOnClick,
  handleToggleEvent,
  participantsList
}) => {
  const determineAttendence = () => {
    if (!user) {
      return 'Attend Event';
    }
    let participantsList = eventData.participants.map(
      participant => participant._id
    );
    return participantsList.includes(user.userID._id)
      ? 'Unattend Event'
      : 'Attend Event';
  };

  const classNameCardTop = () => {
    if (!user) {
      return 'not-active-event-card';
    }

    let participantsList = eventData.participants.map(
      participant => participant._id
    );

    return participantsList.includes(user.userID._id)
      ? 'active-event-card'
      : 'not-active-event-card';
  };

  const presentParticipants = () => {
    return eventData.participants.length ? (
      <div className="attendeance-cards-container">
        <div className="attendance-parcipants-container">
          <div className="attendance-parcipants-count">
            Participants:{eventData.participants.length}
          </div>
          {eventData.participants.map((person, index) => {
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
      <div className={`event-card-top ${classNameCardTop()}`}>
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
          <h6>{eventData.title}</h6>
          <p>{eventData.date}</p>
          <button
            className="attend-event-btn"
            onClick={e => {
              handleToggleEvent(e, eventData._id);
            }}
          >
            {determineAttendence()}
          </button>
        </div>
      </div>
      <div className="event-close">
        <EventCarousel presentation={eventData.images} />
        <div className="event-inner-info-container">
          <p>
            <span>Located</span> {eventData.location}
          </p>
          <div>{presentParticipants()}</div>
          <pre>
            <span>Summary</span> {eventData.summary}
          </pre>
        </div>
      </div>
    </section>
  );
};

export default EventCard;
