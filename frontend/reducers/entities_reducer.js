import { combineReducers } from 'redux';
import users from './users_reducer';
import hostingReducer from './hostings_reducer';
import reviewReducer from './reviews_reducer';
import bookingReducer from './bookings_reducer';

export default combineReducers({
  users,
  hostings: hostingReducer,
  reviews: reviewReducer,
  bookings: bookingReducer,
});
