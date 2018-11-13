import { connect } from 'react-redux';
import SideBar from './side_bar';
import {fetchBookings} from '../../actions/booking_action';

const msp = (state) => ({
  currentUser: state.entities.users[state.session.id],
  bookings: Object.values(state.entities.bookings),
});

const mdp = dispatch => ({
  fetchBookings: id => dispatch(fetchBookings(id)),
});

export default connect(msp, mdp)(SideBar);
