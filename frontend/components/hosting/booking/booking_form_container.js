import React from 'react';
import { connect } from 'react-redux';
import BookingForm from './booking_form';
import { createBooking, clearBookingErrors } from '../../../actions/booking_action';
import { withRouter } from 'react-router';

const msp = state => ({
  guest: state.session.id,
  errors: state.errors.booking,
});

const mdp = dispatch => ({
  createBooking: booking => dispatch(createBooking(booking)),
  clearBookingErrors: () => dispatch(clearBookingErrors()),
});

export default withRouter(connect(msp, mdp)(BookingForm));
