import React from 'react';
import SideBarContainer from './side_bar_container';
import HostingIndex from '../hosting/hosting_index_container';
import MapContainer from '../map/map_container';

export default () => {

  return (
    <div className='home'>
      <div className='home-container'>
        <SideBarContainer/>
        <HostingIndex/>

      </div>

  </div>
  );
};

// <MapContainer/>
