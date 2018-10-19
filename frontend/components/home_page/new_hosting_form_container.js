import { connect } from 'react-redux';
import NewHostingForm from './new_hosting_form';
import { createHosting } from '../../actions/hosting_action';

const mdp = dispatch => ({
  createHosting: (hosting) => dispatch(createHosting(hosting)),
});

export default conntect(null, mdp)(NewHostingForm);
