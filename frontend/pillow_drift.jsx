import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { login } from './actions/session_actions';
// import * as APIUtil from './util/session_api_util';
import * as APIUtil from './util/hosting_api_util';
import { deletErrors } from './actions/session_actions';
import { toggleDropDown } from './actions/ui_actions';
import { fetchHostings } from './actions/hosting_action';
import axios from 'axios';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  let user = { email: 'demo@demo', password: 'starwars' };
  window.login = login;
  window.deleteErrors = deletErrors;
  window.toggleDropDown = toggleDropDown;
  window.store = store;
  window.axios = axios;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store = { store} />, root);
});
