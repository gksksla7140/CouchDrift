import { connect } from 'react-redux';
import HostingShow from './hosting_show';
import { clearBookingErrors } from '../../actions/booking_action';
import { fetchReviews, deleteReview, createReview } from '../../actions/review_action';

const mapStateToProps = (state, { match }) => {
  const hostingId = parseInt(match.params.hostingId);
  const hosting = state.entities.hostings[hostingId];
  return {
    hostingId,
    hosting,
    reviews: Object.values(state.entities.reviews),
  };
};

const mapDispatchToProps = dispatch => ({
  fetchHosting: id => dispatch(fetchHosting(id)),
  fetchReviews: id => dispatch(fetchReviews(id)),
  createReview: review => dispatch(createReview(review)),
  deleteReview: id => dispatch(deleteReview(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HostingShow);
