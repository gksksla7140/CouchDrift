import React from 'react';

const HostingDetail = ({ hosting }) => {
  return (
    <div>
      <ul className="hosting-list">
        <li>Rating: {hosting.rating || 'No reviews yet'}</li>
        <li>Description: {hosting.description}</li>
        <li>Latitude: {hosting.lat}</li>
        <li>Longitude: {hosting.long}</li>
      </ul>
      <br/>
    </div>
  );
};

export default HostingDetail;
