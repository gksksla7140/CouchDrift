import { connect } from 'react-redux';
import { fetchHostings } from '../../actions/hosting_action';
import HostingIndex from './hosting_index';
const msp = (state) => {
  return { hostings: Object.values(state.entities.hostings) };
};

const msd = dispatch => ({
  fetchHostings: ()=> dispatch(fetchHostings()),
});

export default connect(msp, msd)(HostingIndex);
