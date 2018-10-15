import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

const HostingDetail = ({ hosting }) => {
  return (
    <div>
      <ul className="hosting-list">
        <li>Rating: {hosting.rating || 'No reviews yet'}</li>
        <li>Description: {hosting.description}</li>
        <li>Latitude: {hosting.lat}</li>
        <li>Longitude: {hosting.long}</li>
      </ul>

      <h2>Amenities</h2>
      <ul>
        <li>Wifi:{hosting.wifi ? 'true' : 'false'}</li>
        <li>Shower:{hosting.shower ? 'true' : 'false'}</li>
        <li>TV:{hosting.TV ? 'true' : 'false'}</li>
        <li>Bathroom:{hosting.bathroom ? 'true' : 'false'}</li>
        <li>Blanket:{hosting.blanket ? 'true' : 'false'}</li>
        <li>Electricity:{hosting.electricity ? 'true' : 'false'}</li>
        <li>Pet_allowed:{hosting.pet_allowed ? 'true' : 'false'}</li>
        <li>Laundry:{hosting.laundry ? 'true' : 'false'}</li>
        <li>Kitchen:{hosting.kitchen ? 'true' : 'false'}</li>
        <li>Max_guest:{hosting.max_guest}</li>
      </ul>
      <Link to='/' >Index Page</Link>
    </div>
  );
};

export default HostingDetail;
