import { connect } from 'react-redux';
import { fetchHosting } from '../../actions/hosting_action';
import HostingShow from './hosting_show';

const mapStateToProps = (state, { match }) => {
  const hostingId = parseInt(match.params.hostingId);
  const hosting = state.entities.hostings[hostingId];
  return {
    hostingId,
    hosting,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchHosting: id => dispatch(fetchHosting(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HostingShow);
