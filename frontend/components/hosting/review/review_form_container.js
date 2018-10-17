import { connect } from 'react-redux';
import ReviewForm from './review_form';
import { createReview } from '../../../actions/review_action';

const msp = (state) => ({
  author: state.entities.users[state.session.id],
});

const mdp = (dispatch) => ({
  createReview: (review) => dispatch(createReview(review)),
});

export default connect(msp, mdp)(ReviewForm);
