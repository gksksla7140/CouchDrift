import {
  RECEIVE_BOOKINGS,
  RECEIVE_BOOKING,
  RECEIVE_BOOKING_ERRORS,
  CLEAR_BOOKING_ERRORS,
 } from '../actions/requests_actions';
import { merge } from 'lodash';

const bookingRedcuer = (state = { request: {}, errors: [] }, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BOOKINGS:
      return action.bookings;
    case RECEIVE_BOOKING:
      return action.booking;
    case RECEIVE_BOOKING_ERRORS:
      return merge({}, state, { errors });
    case CLEAR_BOOKING_ERRORS:
      return [];
    default:
      return state;
  }
};

export default bookingRedcuer;
