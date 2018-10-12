import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import { openModal, toggleDropDown } from '../../actions/ui_actions';
import Header from './header';

const mapStateToProps = ({ session, entities: { users }, ui: { toggleDown } }) => ({
  currentUser: users[session.id],
  toggled: toggleDown,
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  openModal: (modal) => dispatch(openModal(modal)),
  toggle: () => dispatch(toggleDropDown()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
