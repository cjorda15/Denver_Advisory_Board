const user = (state = null, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return { userID: action.payload };
    case 'LOGOUT_USER':
      return null;
    case 'LOAD_IMAGE':
      let newState = { ...state };
      if (newState.image) {
        delete newState.image;
      }
      newState.image = action.payload;
      return newState;
    default:
      return state;
  }
};

export default user;
