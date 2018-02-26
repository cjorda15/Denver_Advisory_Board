const personalEvents = (state = null, action) => {
  switch (action.type) {
    case 'GENERATE_PERSONAL_EVENTS':
      return action.payload;

    case 'UPDATE_PERSONAL_EVENTS':
      let newState = [...state];
      newState = newState.filter(event => event._id != action.payload.eventId);
      return newState;
    default:
      return state;
  }
};

export default personalEvents;
