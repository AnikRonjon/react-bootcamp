import {
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_FAIL,
} from "./APIConstent";

import React from "react";

export const APIReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case GET_USERS_REQUEST:
      return {
        loading: true,
        users: [],
      };
      break;
    case GET_USERS_SUCCESS:
      return {
        loading: false,
        users: action.payload,
      };
      break
    case GET_USERS_FAIL:
      return {
        loading: false,
        error: action.payload
      }
      break
    default:
      return state;
  }
};
