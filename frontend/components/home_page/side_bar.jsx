import React from 'react';

class SideBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='side-bar-home'>
        <div className='side-bar-status'></div>
        <div className='side-bar-profile'></div>
        <div className='side-bar-facebook'></div>

      </div>
    );
  }
}

export default SideBar;
