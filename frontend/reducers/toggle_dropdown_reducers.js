import { merge } from 'lodash';
import { TOGGLE_DROP_DOWN } from '../actions/ui_actions';
const defaultState =  false;

export default (state = defaultState, action) => {
  switch (action.type) {
    case TOGGLE_DROP_DOWN:
      return !state;
    default:
      return state;

  }
};
