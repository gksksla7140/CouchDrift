import * as APIUtil from '../util/review_api_util';

export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';

export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';

export const RECEIVE_REVIEW_ERRORS = 'RECEIVE_REVIEW_ERRORS';

export const REMOVE_REVIEW = 'REMOVE_REVIEW';

export const receiveReviews = reviews => ({
  type: RECEIVE_REVIEWS,
  reviews,
});

export const receiveReview = review => ({
  type: RECEIVE_REVIEW,
  review,
});

export const removeReview = id => ({
  type: REMOVE_REVIEW,
  id,
});

export const receiveReviewErrors = reviewErrors => ({
  type: RECEIVE_REVIEW_ERRORS,
  reviewErrors,
});

export const deleteReview = id => dispatch => (
  APIUtil.deleteReview(id)
    .then(review => dispatch(removeReview(review.id)))
);

export const createReview = (review) => dispatch => (
  APIUtil.createReview(review)
    .then(review => dispatch(receiveReview(review))
  ), err => dispatch(receiveReviewErrors(err.responseJSON))
);

export const fetchReviews = (hostingId) => dispatch => (
  APIUtil.fetchReviews(hostingId)
    .then(reviews => dispatch(receiveReviews(reviews)))
);
