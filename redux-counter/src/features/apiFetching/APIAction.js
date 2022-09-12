import React from "react";
import axios from "axios";
import {
  GET_USERS_SUCCESS,
  GET_USERS_REQUEST,
  GET_USERS_FAIL,
} from "./APIConstent";

const APIAction = async (dispatch) => {
  try {
    dispatch({ type: GET_USERS_REQUEST });
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    dispatch({ type: GET_USERS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_USERS_FAIL,
      payload:
        error.data && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export default APIAction;
