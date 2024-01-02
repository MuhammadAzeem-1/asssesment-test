import * as api from "../api";

// Action Creators

export const getProducts = () => async (dispatch) => {
  try {
    dispatch({ type: "START_LOADING" });
    const { data } = await api.fetchProducts();
    dispatch({ type: "FETCH_PRODUCTS", payload: data });
    dispatch({ type: "END_LOADING" });
  } catch (error) {
    console.log(error);
  }
};
