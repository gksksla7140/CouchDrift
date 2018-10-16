import * as APIUtil from '../util/hosting_api_util';

export const RECEIVE_HOSTINGS = 'RECEIVE_HOSTINGS';
export const RECEIVE_HOSTING = 'RECEIVE_HOSTING';

export const receiveHostings = hostings => ({
  type: RECEIVE_HOSTINGS,
  hostings,
});

// export const receiveHosting = ({ hosting, reviews, authors, host }) => ({
//   type: RECEIVE_HOSTING,
//   hosting,
//   reviews,
//   authors,
// });

// export const receiveReview = ({ review, average_rating, author }) => ({
//   type: RECEIVE_REVIEW,
//   review,
//   average_rating,
//   author,
// });

// export const createReview = review => dispatch => (
//   APIUtil.createReview(review).then(review => (
//     dispatch(receiveReview(review))
//   ))
// );

export const fetchHostings = () => dispatch => (
  APIUtil.fetchHostings().then(hostings => (
    dispatch(receiveHostings(hostings))
  ))
);

// export const fetchHosting = id => dispatch => (
//   APIUtil.fetchHosting(id).then(payload => (
//     dispatch(receiveHosting(payload))
//   ))
// );

// export const createBench = bench => dispatch => (
//   APIUtil.createBench(bench).then(bench => (
//     dispatch(receiveBench(bench))
//   ))
// );
