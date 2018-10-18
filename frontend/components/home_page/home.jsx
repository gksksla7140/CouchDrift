import React from 'react';
import SideBarContainer from './side_bar_container';
import HostingIndex from '../hosting/hosting_index_container';



class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    };
  }

  render() {
    return (
      <div className='home'>

        <div className='home-container'>
          <SideBarContainer/>
          <HostingIndex/>
        </div>

      </div>
    );
  }

}

export default Home;

// export default () => {
// <HostingIndex/>
//
//   return (
//   );
// };
