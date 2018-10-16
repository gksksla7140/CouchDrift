import { combineReducers } from 'redux';
import bookingErrorReducer from './booking_error_reducer';
import session from './session_errors_reducer';

export default combineReducers({
  session,
  booking: bookingErrorReducer,
});
