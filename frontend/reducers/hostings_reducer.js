import { RECEIVE_HOSTINGS, RECEIVE_HOSTING } from '../actions/hosting_action';
import { merge } from 'lodash';

const hostingReducer = (state = {}, action) => {
  
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_HOSTINGS:
      return action.hostings;
    case RECEIVE_HOSTING:
      return merge({}, state, { [action.hosting.id]: action.hosting });
    default:
      return state;

  }
};

export default hostingReducer;
