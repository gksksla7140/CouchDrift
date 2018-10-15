import { connect } from 'react-redux';
import Map from './map';
import { fetchHostings } from '../../actions/hosting_action';

const msp = (state) => ({
  hostings: Object.values(state.entities.hostings),
});

const mdp = dispatch => ({
  fetchHostings: ()=> dispatch(fetchHostings()),
});

export default connect(msp, mdp)(Map);
