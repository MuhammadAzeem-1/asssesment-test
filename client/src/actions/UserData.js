import * as api from "../api";

// Action Creators

export const userData = (formData) => async (dispatch) => {
  try {
    const { data } = await api.postData(formData);
  } catch (error) {
    console.log(error);
  }
};

export const getUserData = () => async (dispatch) => {
  try {
    dispatch({ type: "START_LOADING" });
    const { data } = await api.getdata();

    dispatch({ type: "USER_LIST", payload: data });
    dispatch({ type: "END_LOADING" });
  } catch (error) {
    console.log(error);
  }
};
