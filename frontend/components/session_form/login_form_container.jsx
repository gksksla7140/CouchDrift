import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import { deletErrors } from  '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => ({
    errors: errors.session,
    formType: 'Log In',
  }
);

const mapDispatchToProps = dispatch => ({
  action: (user) => dispatch(login(user)),
  otherForm: (
      <button onClick={() => dispatch(openModal('signup'))}>
        Signup
      </button>
    ),
  closeModal: () => dispatch(closeModal()),
  deleteErrors: () => dispatch(deletErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
