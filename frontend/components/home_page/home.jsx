import React from 'react';
import SideBarContainer from './side_bar_container';
import HostingIndex from '../hosting/hosting_index_container';
import Map from '../map/map';

export default () => {

  return (
    <div className='home'>

    <SideBarContainer/>
    <HostingIndex/>

  </div>
  );
};
