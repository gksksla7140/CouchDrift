import React from 'react';
import { DateRangePicker } from 'react-dates';
import 'react-dates/initialize';
import { START_DATE, END_DATE } from 'react-dates/constants';

import css from 'react-dates/lib/css/_datepicker.css';
class BookingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      focused: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const booking = {
        guest_id: this.props.guest,
        hosting_id: this.props.hosting.id,
        start_date: this.state.startDate._d,
        end_date: this.state.endDate._d,
      };



    this.props.createBooking(booking)
       .then(this.props.closeModal)
       .then(() => {
          this.props.openSuccessModal();
          setTimeout(() => this.props.histroy.push('/'), 1000);
        }, () => {
          this.props.openErrorModal();
          this.props.clearBookingErrors();
          setTimeout(() =>
        this.props.closeErrorModal(), 1500);
        });
  }

  render() {
    const createBookingbutton =
    this.state.endDate ?  <input className='create-book-button' type='submit' value='Book'/> :
    <input type='submit' className='create-book-button didntpickdate' disabled value='Book'/>;
    return (
        <div className='booking-form-container'>

          <h1>Pick the Dates</h1>


          <form className='form-container'
            onSubmit={this.handleSubmit}>
              <DateRangePicker
                startDateId={this.state.startDate}
                startDateId={this.state.endDate}
                startDate={this.state.startDate}
                endDate={this.state.endDate}
                focusedInput={this.state.focused}
                onDatesChange=
                {({ startDate, endDate }) => { this.setState({ startDate, endDate }); }}
                onFocusChange={ (focused)  => { this.setState({ focused }); }}
                />

            {createBookingbutton}

          </form>
        </div>
    );
  }

}

export default BookingForm;
