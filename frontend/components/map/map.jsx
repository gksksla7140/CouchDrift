import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import MapIndex from './map_index';

class Map extends Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    center: {
      lat: 37.7749,
      lng: -122.4194,
    },
    zoom: 12,
  };

  // componentDidMount() {
  //   this.props.fetchHostings();
  // }

  render() {
    const hostings = this.props.hostings.map(hosting => (
      <MapIndex className='map-marker'
            lat={hosting.lat}
            lng={hosting.long}
              hosting={hosting}
            />));

    return (
      <div style={{ height: '80vh', width: '100%' }} className='map'>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDerHslRn7NZq_nZ5LnDFdcC9hg8a-9wAc' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
        { hostings }

        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
