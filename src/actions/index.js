export const updateUser = input => {
  return {
    type: 'UPDATE_USER',
    payload: input
  };
};

export const logoutUser = () => {
  return {
    type: 'LOGOUT_USER'
  };
};

export const loadImage = input => {
  return {
    type: 'LOAD_IMAGE',
    payload: input
  };
};

export const gatherEvents = input => {
  return {
    type: 'GATHER_EVENTS',
    payload: input
  };
};

export const updateParticipant = input => {
  return {
    type: 'UPDATE_PARTICPIANT',
    payload: input
  };
};
