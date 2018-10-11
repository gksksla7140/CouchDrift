import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { deletErrors } from '../../actions/session_actions';
import { connect } from 'react-redux';
import  LogInFormContainer  from '../session_form/login_form_container';
import  SignUpFormContainer  from '../session_form/signup_form_container';

const Modal = ({ modal, closeModal }) => {
  if (!modal) {
    return null;
  }

  const closeSession = () => {

    closeModal();
    store.dispatch(deletErrors());

  };

  let component;
  switch (modal) {
    case 'login':
      component = <LogInFormContainer />;
      break;
    case 'signup':
      component = <SignUpFormContainer />;
      break;
    default:
      return null;
  }

  return (
    <div className="modal-background" onClick={closeSession}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );

};

const mapStateToProps = state => ({
  modal: state.ui.modal,
  store1: state,
});

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
