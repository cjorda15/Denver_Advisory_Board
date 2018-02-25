const personalEvents = (state = null, action) => {
  switch (action.type) {
    case 'UPDATE_PERSONAL_EVENTS':
      return action.payload;
    default:
      return state;
  }
};

export default personalEvents;
