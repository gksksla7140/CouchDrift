
import React from 'react';
import HostingIndexItem from './hosting_index_item';

class HostingIndex extends React.Component {
  componentDidMount() {
    this.props.fetchHostings();
  }

  render() {

    const hostings = this.props.hostings.map(hosting => (
      <li className="hosting">
        <HostingIndexItem hosting={hosting} key={hosting.id}/>
      </li>)
    );

    return (
      <div className="hosting-index">
        <h2>Hostings!</h2>
        <ul className="hostings-item">
          { hostings }
        </ul>
      </div>
    );
  }
}

export default HostingIndex;
