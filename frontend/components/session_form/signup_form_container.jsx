import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, login } from '../../actions/session_actions';
import SessionForm from './session_form';
import { openModal, closeModal } from '../../actions/ui_actions';

const mapStateToProps = ({ errors }) => ({
    errors: errors.session,
    formType: 'Join',
    navLink: <Link to="/login">Log In</Link>,
  });

const mapDispatchToProps = dispatch => ({
    action: (user) => dispatch(signup(user)),
    login: (user) => dispatch(login(user)),
    otherForm: (
      <button onClick={() => dispatch(openModal('login'))}>
        Login
      </button>
    ),
    closeModal: () => dispatch(closeModal()),
  });

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
