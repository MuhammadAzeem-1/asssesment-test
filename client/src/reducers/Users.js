const users = (state = { isLoading: true, users: [] }, action) => {
  switch (action.type) {
    case "START_LOADING":
      return { ...state, isLoading: true };

    case "END_LOADING":
      return { ...state, isLoading: false };

    case "USER_LIST":
      return {
        ...state,
        users: action.payload,
      };

    default:
      return state;
  }
};

export default users;
