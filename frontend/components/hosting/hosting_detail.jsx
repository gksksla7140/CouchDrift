import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

const HostingDetail = ({ hosting }) => {
  // const rating = hosting.rating || 0;
  // const stars =


  return (
    <div className='hosting-detail-container'>
      <h1>Description:</h1>
        <h3>All Natural&Mud-Wall apt
Good access to Major spot (15mins-50mins )Tateishi Tokyo,Quaint Neighborhood around the Station.
Many Bars still exist since right after the World War near the station.
You can feel what Tokyo was like back in 1940's.</h3>

  <div className='amenities-list'>
    <h1>Amenities</h1>
  </div>
      <div className='amenities-ul'>
        <div className={hosting.wifi ? null : 'crossed-div' }
          >{hosting.wifi ? <i className="fas fa-wifi"></i> :
          <i className="fas fa-wifi crossed"/>} Wifi  </div>
        <div className={hosting.shower ? null : 'crossed-div' }
          >{hosting.shower ? <i className="fas fa-shower"></i> :
           <i className="fas fa-shower crossed"/>} Shower</div>
        <div className={hosting.TV ? null : 'crossed-div' }
          >{hosting.TV ? <i class="fas fa-tv"></i> :
          <i class="fas fa-tv crossed"/>} TV</div>
        <div className={hosting.bathroom ? null : 'crossed-div' }
          >{hosting.bathroom ? <i class="fas fa-poop"></i> :
          <i class="fas fa-poop"></i>} Bathroom</div>
        <div className={hosting.blanket ? null : 'crossed-div' }
          >{hosting.blanket ? <i className="fas fa-bed"></i> :
          <i className="fas fa-bed crossed"/>} bed</div>
        <div className={hosting.electricity ? null : 'crossed-div' }
          >{hosting.electricity ? <i className="fas fa-plug"></i> :
          <i className="fas fa-plug crossed"/>} electricity</div>
        <div className={hosting.pet_allowed ? null : 'crossed-div' }
          >{hosting.pet_allowed ? <i className="fas fa-paw"></i> :
           <i className="fas fa-paw crossed"/>} Pet</div>
        <div className={hosting.laundry ? null : 'crossed-div' }
          >{hosting.laundry ? <i className="fas fa-trash"></i> :
          <i className="fas fa-trash crossed"/>} Trash</div>
        <div className={hosting.kitchen ? null : 'crossed-div' }
          >{hosting.kitchen ? <i className="fas fa-utensils"></i> :
          <i className="fas fa-utensils crossed"/>} kitchen</div>
        <div>Max guest: {hosting.max_guest}</div>
      </div>
      <div className='link-index-container'>
        <Link to='/' className='link-index'>Go Back to Index Page</Link>
      </div>
    </div>
  );
};

export default HostingDetail;
