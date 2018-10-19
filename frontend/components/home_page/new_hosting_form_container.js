import { connect } from 'react-redux';
import NewHostingForm from './new_hosting_form';
import { createHosting } from '../../actions/hosting_action';

const msp = state => ({
  host_id: state.session.id,
});

const mdp = dispatch => ({
  createHosting: (hosting) => dispatch(createHosting(hosting)),
});

export default connect(msp, mdp)(NewHostingForm);
