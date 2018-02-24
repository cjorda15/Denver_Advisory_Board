const events = (state = null, action) => {
  switch (action.type) {
    case 'GATHER_EVENTS':
      return action.payload;

    case 'UPDATE_PARTICPIANT':
      let newState = [...state];
      newState = newState.map(event => {
        if (event._id == action.payload.eventId) {
          let outcome = event.participants.findIndex(person => {
            return person._id == action.payload.user._id;
          });
          outcome !== -1
            ? event.participants.splice(outcome, 1)
            : event.participants.push({ ...action.payload.user });
          return event;
        } else {
          return event;
        }
      });
      return newState;

    default:
      return state;
  }
};

export default events;
