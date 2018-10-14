import React from 'react';

class SideBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const user = this.props.currentUser;
    const hosting = user.hosting ? 'Hosting' : 'Not Hosting';
    return (
      <div className='side-bar-home'>
        <div className='side-bar-status'>
          <p>Username: {user.username}</p>
          <p>Status: {hosting}</p>
        </div>
        <div className='side-bar-profile'>
          <ul className= 'profile-info'>
            <li>Name: {user.fname + ' ' + user.lname}</li>
            <li>email: {user.email}</li>
            <li>about: {user.about}</li>
            <li>sex: {user.sex}</li>
            <li>age: {user.age}</li>
          </ul>
        </div>

        <div className='side-bar-facebook'>
          <h2>Add us in Facebook!</h2>
                <a id='facebook-button'
                  href='https://www.facebook.com/'><span className='fab fa-facebook-square' > </span> Facebook</a>
        </div>


      </div>
    );
  }
}

export default SideBar;
