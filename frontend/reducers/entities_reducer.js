import { combineReducers } from 'redux';
import users from './users_reducer';
import hostingReducer from './hostings_reducer';

export default combineReducers({
  users,
  hostings: hostingReducer,
});
