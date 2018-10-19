import * as APIUtil from '../util/hosting_api_util';

export const RECEIVE_HOSTINGS = 'RECEIVE_HOSTINGS';
export const RECEIVE_HOSTING = 'RECEIVE_HOSTING';
export const RECEIVE_HOSTING_ERRORS = 'RECEIVE_BOOKING_ERRORS';
export const CLEAR_HOSTING_ERRORS = 'CLEAR_HOSTING_ERRORS';

export const receiveHostings = hostings => ({
  type: RECEIVE_HOSTINGS,
  hostings,
});

export const receiveHosting = (hosting) => ({
  type: RECEIVE_HOSTING,
  hosting,
});

export const receiveHostingErrors = errors => ({
  type: RECEIVE_HOSTING_ERRORS,
  errors,
});

export const clearHostingErrors = () => ({
  type: CLEAR_HOSTING_ERRORS,
});

export const fetchHostings = () => dispatch => (
  APIUtil.fetchHostings().then(hostings => (
    dispatch(receiveHostings(hostings))
  ))
);

export const createHosting = hosting => dispatch => (
  APIUtil.createHosting(hosting)
  .then(hosting => (
    dispatch(receiveHosting(hosting)),
    errors => dispatch(receiveBookingErrors(errors.responseJSON))
  ))
);
