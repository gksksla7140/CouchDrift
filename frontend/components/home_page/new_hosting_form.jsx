import React from 'react';
import axios from 'axios';

class NewHostingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
      long: null,
      lat: null,
      img: '',
      description: '',
      wifi: false,
      shower: false,
      TV: false,
      bathroom: false,
      blanket: false,
      electricity: false,
      pet_allowed: false,
      laundry: false,
      kitchen: false,
      max_guest: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.geoCode = this.geoCode.bind(this);
    this.update = this.update.bind(this);
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  geoCode(address) {
    axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
          params: {
            address: address,
            key: 'AIzaSyDerHslRn7NZq_nZ5LnDFdcC9hg8a-9wAc',
          },
        })
        .then((response) => {
          const position = response.data.results[0].geometry.location;
          this.setState({ long: position.lng, lat: position.lat });
        });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.geoCode(this.state.address);
    this.props.createHosting(this.state).then(alert('success')).catch(alert('fail'));
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>address:
          <input type='text' onChange={this.update('address')} value={this.state.address}></input>
        </label>
        <textarea onChange={this.update('description')} value={this.state.description}></textarea>

          <input type='radio' onChange={this.update('wifi')} value={true}>Wifi</input>


          <input type='radio' onChange={this.update('shower')} value={true}>Shower</input>


          <input type='radio' onChange={this.update('TV')} value={true}>TV</input>


          <input type='radio' onChange={this.update('bathroom')} value={true}>Bathroom</input>


          <input type='radio' onChange={this.update('blanket')} value={true}>Blanket</input>
          <input type='radio' onChange={this.update('electricity')} value={true}>Electricity</input>
          <input type='radio' onChange={this.update('pet_allowed')} value={true}>Pet allowed</input>
          <input type='radio' onChange={this.update('laundry')} value={true}>Laundry</input>
          <input type='radio' onChange={this.update('kitchen')} value={true}>kitchen</input>
          <input type="number" placeholder="Max Guest" min="1" max="8" />



      </form>
    );
  }

}

export default NewHostingForm;
