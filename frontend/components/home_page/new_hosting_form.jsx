import React from 'react';
import axios from 'axios';
import { RadioGroup, Radio } from 'react-radio-group';

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
      max_guest: 1,
      host_id: this.props.host_id,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.geoCode = this.geoCode.bind(this);
    this.update = this.update.bind(this);
  }

  update(field) {
    return (e) => {
      if (e.target.type === 'checkbox') {
        this.setState({ [field]: e.target.checked });
      } else {
        this.setState({ [field]: e.target.value });
      }
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

          console.log(position);
          this.setState({ long: position.lng, lat: position.lat });

          // this.setState({ [lat]: parseInt(position.lat) });
        }).then(() =>
        this.props.createHosting(this.state)
      );
  }

  handleSubmit(e) {
    e.preventDefault();
    this.geoCode(this.state.address);
  }

  render() {
    return (
      <div className='new-form-container'>
        <h1>Create New Hosting</h1>
      <form onSubmit={this.handleSubmit} className='hosting-form'>
        <label>
          <input type='text' className='address-input'
            name='hosting[address]'
            placeholder='address' onChange={this.update('address')} value={this.state.address}></input>
        </label>
        <label id='description-text'>
          <textarea onChange={this.update('description')}
            name='hosting[description]'
            placeholder='description' value={this.state.description}></textarea>
        </label>
        <label>
          <input type='text' className='address-input'
            name='hosting[img]'
             placeholder ='image url'  onChange={this.update('img')} value={this.state.img}></input>
        </label>
        <div className='radio-checkbox'>
        <label>Wifi
          <input name='hosting[wifi]' type='checkbox'
            checked={this.state.wifi} onChange={this.update('wifi')}></input>
        </label>
        <label>Shower
          <input name='hosting[shower]' type='checkbox'
            checked={this.state.shower} onChange={this.update('shower')}></input>
        </label>
        <label>TV
          <input name='hosting[TV]' type='checkbox'
            checked={this.state.TV} onChange={this.update('TV')}></input>
        </label>
        <label>Bathroom
          <input name='hosting[bathroom]' type='checkbox'
            checked={this.state.bathroom} onChange={this.update('bathroom')}></input>
        </label>
        <label>Blanket
          <input name='hosting[blanket]' type='checkbox'
            checked={this.state.blanket} onChange={this.update('blanket')}></input>
        </label>
        <label>Electricity
          <input name='hosting[electricity]' type='checkbox'
            checked={this.state.electricity} onChange={this.update('electricity')}></input>
        </label>
        <label>Pet allowed?
          <input name='hosting[pet_allowed]' type='checkbox'
            checked={this.state.pet_allowed} onChange={this.update('pet_allowed')}></input>
        </label>
        <label>Laundry
          <input name='hosting[laundry]' type='checkbox'
            checked={this.state.laundry} onChange={this.update('laundry')}></input>
        </label>
        <label>Kitchen
          <input name='hosting[kitchen]' type='checkbox'
            checked={this.state.kitchen} onChange={this.update('kitchen')}></input>
        </label>
    </div>
    <label name='hosting[max_guest]' className='hosting-guests'>Max Guests
      <input type="number" name="hosting[max_guest]"
        value={this.state.max_guest}
        onChange={this.update('max_guest')}
        min="1" max="8" />
    </label>
        <input className='submit-hosting' type='submit' value='Create Hosting'></input>
      </form>
    </div>
    );
  }

}

export default NewHostingForm;
