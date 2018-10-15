import React from 'react';
import { Link } from 'react-router-dom';

import HostingDetail from './hosting_detail';

const HostingShow = ({ hosting, hostingId, fetchHosting }) => {


  return (
    <div className="single-hosting-show">
      <div className="single-bench-map">
      </div>
      <div className="right-half hosting-details">
        <HostingDetail hosting={hosting} />
      </div>
    </div>
  );
};

export default HostingShow;
