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
