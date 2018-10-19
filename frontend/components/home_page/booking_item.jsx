import React from 'react';
import { withRouter } from 'react-router-dom';

class BookingIndex extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.history.push(`/hostings/${this.props.booking.hosting.id}`);
  }

  render() {
    const booking = this.props.booking;
    const startDate = new Date(booking.start_date).toDateString();
    const endDate = new Date(booking.end_date).toDateString();
    const status  = booking.status === 'APPROVED' ?
    <div className='approved'>{'APPROVED'}</div> : <div className='pending'>{'PENDING'}</div>;

    return (
      <div className='booking-item-container' onClick={this.handleClick}>
          <div className='booking-address'>
            Address: {booking.hosting.address}
          </div>
          <div>
          <div className='start-date'>Start : {startDate}</div>
          <div className='end-date'>End  : {endDate}</div>
        </div>
          {status}


      </div>
    );
  }
}

export default withRouter(BookingIndex);
