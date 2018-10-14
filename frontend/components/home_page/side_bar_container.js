import { connect } from 'react-redux';
import SideBar from './side_bar';

const msp = (state) => ({
  currentUser: state.entities.users[state.session.id],
});

export default connect(msp)(SideBar);
