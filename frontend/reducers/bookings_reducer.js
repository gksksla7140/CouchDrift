import {
  RECEIVE_BOOKINGS,
  RECEIVE_BOOKING,
  RECEIVE_BOOKING_ERRORS,
  CLEAR_BOOKING_ERRORS,
} from '../actions/booking_action';
import { merge } from 'lodash';

const bookingRedcuer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BOOKINGS:
      return action.bookings;
    case RECEIVE_BOOKING:
      return action.booking;
    default:
      return state;
  }
};

export default bookingRedcuer;
