import React from 'react';
import { connect } from 'react-redux';
import { deleteReview } from '../../../actions/review_action';
import ReviewItem from './review_item';

const msp = (state) => ({
  currentUser: state.session.id,
});

const mdp = (dispatch) => ({
  deleteReview: (id) => dispatch(deleteReview(id)),
});

export default connect(msp, mdp)(ReviewItem);
