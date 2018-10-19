import {
  RECEIVE_HOSTINGS,
  RECEIVE_HOSTING,
  RECEIVE_HOSTING_ERRORS,
  CLEAR_HOSTING_ERRORS,
} from '../actions/hosting_action';

const hostingErrorReducer = (state =[], action) => {
  switch (action.type) {
    case RECEIVE_HOSTING_ERRORS:
      return action.errors;
    case CLEAR_HOSTING_ERRORS:
      return [];
    default:
      return state;
  }
};

export default hostingErrorReducer;
