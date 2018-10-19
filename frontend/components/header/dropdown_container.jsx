import React from 'react';
import { connect } from 'react-redux';
import { toggleDropDown } from '../../actions/ui_actions';
import { logout } from '../../actions/session_actions';

class DropDown extends React.Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);
  }

  componentDidMount() {
    if (this.props.toggled) {
      this.render();
    }
  }

  componentWillReceiveProps() {
    if (this.props.toggled) {
      this.render();
    }
  }

  logOut(e) {
    this.props.logout();
  }

  render () {
    return (
      <ul className={this.props.toggled ? 'dropdown' : 'hidden-dropdown'}>
        <li>Edit Profile</li>
        <li> New Booking</li>
        <li onClick={this.logOut}>Log Out</li>
      </ul>
    );
  }
}

const mps = ({ ui: { toggleDown } }) => ({
  toggled: toggleDown,
});

const mdp = () => dispatch => ({
  logout: ()=> dispatch(logout()),
});

export default connect(mps, mdp)(DropDown);
