import C from "../constants";
import { combineReducers } from "redux";
export const errors = (state = [], action) => {
  switch (action.type) {
    case C.ADD_ERROR:
      return [...state, action.payload];
    case C.CLEAR_ERROR:
      return state.filter(i => i !== action.payload);
    default:
      return state;
  }
};

export const tasks = (state = [], action) => {
  switch (action.type) {
    case C.BEGIN_FETCH_NOTES:
      return {
        ...state,
        loading: true,
        errors: []
      };

    case C.FETCH_NOTES_SUCCESS:
      return {
        ...state,
        loading: false,
        tasks: action.payload
      };

    case C.FETCH_NOTES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        tasks: []
      };

    default:
      return state;
  }
};

export default combineReducers({
    errors,
    tasks
});
