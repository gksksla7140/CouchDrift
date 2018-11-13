import { connect } from 'react-redux';
import NewHostingForm from './new_hosting_form';
import { createHosting } from '../../actions/hosting_action';
import { withRouter} from 'react-router-dom';

const msp = state => ({
  host_id: state.session.id,
});

const mdp = dispatch => ({
  createHosting: (hosting) => dispatch(createHosting(hosting)),
});

export default withRouter(connect(msp, mdp)(NewHostingForm));
