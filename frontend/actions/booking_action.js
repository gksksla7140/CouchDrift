import * as APIUtil from '../util/booking_api_util';

export const RECEIVE_BOOKINGS = 'RECEIVE_BOOKINGS';
export const RECEIVE_BOOKING_ERRORS = 'RECEIVE_BOOKING_ERRORS';
export const RECEIVE_BOOKING = 'RECEIVE_BOOKING';
export const CLEAR_BOOKING_ERRORS = 'CLEAR_BOOKING_ERRORS';

export const receiveBookings = bookings => ({
  type: RECEIVE_BOOKINGS,
  bookings,
});

export const receiveBookingErrors = errors => ({
  type: RECEIVE_BOOKING_ERRORS,
  errors
});

export const receiveBooking = booking => ({
  type: RECEIVE_BOOKING,
  booking,
});

export const clearBookingErrors = () => ({
  type: CLEAR_BOOKING_ERRORS,
});

export const fetchBookings = (guestId) => dispatch => (
  APIUtil.fetchBookings(guestId)
  .then(bo => dispatch(receiveBooking(bo)))
);

export const createBooking = (booking) => dispatch => (
  APIUtil.createBooking(booking)
    .then(booking => dispatch(receiveBooking(booking))
  ), errors => dispatch(receiveBookingErrors(errors.responseJSON))
);
