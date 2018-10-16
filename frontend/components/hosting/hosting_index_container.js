import { connect } from 'react-redux';
import { fetchHostings } from '../../actions/hosting_action';
import { fetchBookings } from '../../actions/booking_action';
import HostingIndex from './hosting_index';
const msp = (state) => {
  return {
    hostings: Object.values(state.entities.hostings),
    bookings: Object.values(state.entities.bookings),
    userId: state.session.id,
  };
};

const msd = dispatch => ({
  fetchHostings: ()=> dispatch(fetchHostings()),
  fetchBookings: (id) => dispatch(fetchBookings(id)),
});

export default connect(msp, msd)(HostingIndex);
