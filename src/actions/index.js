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
    type: 'UPDATE_PARTICIPIANT',
    payload: input
  };
};

export const generatePersonalEvents = input => {
  return {
    type: 'GENERATE_PERSONAL_EVENTS',
    payload: input
  };
};

export const updatePersonalEvents = input => {
  return {
    type: 'UPDATE_PERSONAL_EVENTS',
    payload: input
  };
};
