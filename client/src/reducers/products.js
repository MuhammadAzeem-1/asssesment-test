const posts = (state = { isLoading: true, product: [] }, action) => {
  switch (action.type) {
    case "START_LOADING":
      return { ...state, isLoading: true };

    case "END_LOADING":
      return { ...state, isLoading: false };

    case "FETCH_PRODUCTS":
      return {
        ...state,
        product: action.payload,
      };

    default:
      return state;
  }
};

export default posts;
