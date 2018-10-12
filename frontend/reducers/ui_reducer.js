import { combineReducers } from 'redux';
import modal from './modal_reducer';
import toggleDown from './toggle_dropdown_reducers';

export default combineReducers({
  modal,
  toggleDown,
});
