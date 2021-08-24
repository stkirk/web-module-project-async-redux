import {
  FAIL_FETCHING_CREATURE,
  START_FETCHING_CREATURE,
  SUCCESS_FETCHING_CREATURE,
} from "../actions";

const initialState = {
  creature: {},
  loading: false,
  error: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case START_FETCHING_CREATURE:
      return {
        ...state,
        loading: true,
      };
    case SUCCESS_FETCHING_CREATURE:
      return {
        ...state,
        loading: false,
        creature: action.payload[Math.floor(Math.random() * 48)],
      };
    case FAIL_FETCHING_CREATURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
