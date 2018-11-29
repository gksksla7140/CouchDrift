import React from 'react';
import HostingIndexItem from './hosting_index_item';
import Switch from "react-switch";
import MapContainer from '../map/map_container';
class HostingIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      inputVal: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleChange(checked) {
    this.setState({ checked });
  }
  handleInput(event) {
    this.setState({ inputVal: event.currentTarget.value });
  }
  

  componentDidMount() {
    this.props.fetchHostings();
    this.props.fetchBookings(this.props.userId);
  }

  matches() {
    if (this.state.inputVal.length === 0) {
      return this.props.hostings;
    }

    // this.props.hostings.forEach(hosting => {
    //   const sub = hosting.slice(0, this.state.inputVal.length);
    //   if (sub.toLowerCase() === this.state.inputVal.toLowerCase()) {
    //     matches.push(hosting);
    //   }
    // });
    let matches = this.props.hostings.filter(hosting => hosting.address.toLowerCase().includes(this.state.inputVal.toLowerCase()));


    return matches;
  }

  render() {

    const hostings = this.matches().map(hosting => (
        <HostingIndexItem hosting={hosting} key={hosting.id}/>)

    );
    const content = this.state.checked ? <MapContainer/> : hostings;
    return (
      <div className="hosting-index">
        <div className='search-bar'>
          <h2>Search</h2>
          <input type='text' onChange={this.handleInput}
            value={this.state.inputVal} placeholder='Search by address'></input>
          <i className="fas fa-search-location"></i>
        </div>
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
