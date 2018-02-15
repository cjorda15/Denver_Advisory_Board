const user = (state = null, action) => {
  switch (action.type) {
    case 'UPDATE_USER':
      return { userID: action.payload };
    case 'LOGOUT_USER':
      return null;
    case 'LOAD_IMAGE':
      let newState = { ...state };
      if (newState.userID.image) {
        delete newState.userID.image;
      }
      newState.userID.image = action.payload;
      return newState;
    default:
      return state;
  }
};

export default user;
