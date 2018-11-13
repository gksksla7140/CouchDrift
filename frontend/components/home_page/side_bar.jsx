import React from 'react';
import BookingItem from './booking_item';

class SideBar extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const user = this.props.currentUser;
    const hosting = user.hosting ? 'Hosting' : 'Not Hosting';
    const name = user.fname ? (user.fname + ' ' + user.lname) : 'No name';
    if (this.props.bookings) {
    }
    const bookings = this.props.bookings.map(booking =>
      <BookingItem booking={booking}/>
    );

    return (
      <div className='side-bar-home'>
        <div className='side-bar-status'>
          <div className='icon-name-container'>
          <div className='home-profile-icon'></div>
            <div className='home-name'>{name}</div>
          </div>
          <div className='user-profile'>
            <h2>Profile</h2>
            <div className='user-pro-wrapper'>
            <div className='user-pro-1'>
              <h3>Username:</h3>
              <h3>Email:</h3>
              <h3>Age:</h3>
              <h3>Sex:</h3>
            </div>
            <div className='user-pro-2'>
              <h3>{user.username}</h3>
              <h3>{user.email}</h3>
              <h3>{user.age}</h3>
              <h3>{user.sex}</h3>
            </div>
          </div>
          <div className='about'>
            <h4>{user.about}</h4>
          </div>

          </div>

        </div>
        <div className='booking-list-container'>
        <h1>Your Bookings</h1>
        {bookings}
      </div>



      </div>
    );
  }
}

export default SideBar;
