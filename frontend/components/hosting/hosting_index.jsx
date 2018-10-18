import React from 'react';
import HostingIndexItem from './hosting_index_item';
import Switch from "react-switch";
import MapContainer from '../map/map_container';
class HostingIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    this.setState({ checked });
  }

  componentDidMount() {
    this.props.fetchHostings();
    this.props.fetchBookings(this.props.userId);
  }

  render() {

    const hostings = this.props.hostings.map(hosting => (
        <HostingIndexItem hosting={hosting} key={hosting.id}/>)

    );
    const content = this.state.checked ? <MapContainer/> : hostings;
    return (
      <div className="hosting-index">
        <div className='switch-wrapper'>
        <h1>Travel the world with Couchdrift </h1>
          <label htmlFor="material-switch" className='switch'>
            <div>Find by Map</div>
      <Switch
        checked={this.state.checked}
        onChange={this.handleChange}
        onColor="#86d3ff"
        onHandleColor="#2693e6"
        handleDiameter={30}
        uncheckedIcon={false}
        checkedIcon={false}
        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
        height={20}
        width={48}
        className="react-switch"
        id="material-switch"
      />
    </label>
  </div>
        <div className="hostings-item">
          { content }
        </div>
      </div>
    );
  }
}

export default HostingIndex;
