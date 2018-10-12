import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { login } from './actions/session_actions';
import * as APIUtil from './util/session_api_util';
import { deletErrors } from './actions/session_actions';
import { toggleDropDown } from './actions/ui_actions';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  let user = { email: 'demo@gmail.com', password: 'starwars' };
  window.login = login;
  window.deleteErrors = deletErrors;
  window.toggleDropDown = toggleDropDown;
  window.store = store;
  // window.APIUtil = APIUtil;
  // store.dispatch(login(user));
  const root = document.getElementById('root');
  ReactDOM.render(<Root store = { store} />, root);
});
