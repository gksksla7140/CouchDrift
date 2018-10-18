import React from 'react';
import { withRouter } from 'react-router-dom';

class HostingIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.history.push(`/hostings/${this.props.hosting.id}`);
  }

  render() {
    const img = {
      backgroundImage: `url(${this.props.hosting.img_url})`,
    };
    return (
      <div className='index-item-container' onClick={this.handleClick}>
        <div className='overflow'>
          <div className="index-item-info" style= {img}>
          </div>
        </div>

        <div className='hosting-address'>{this.props.hosting.address}</div>
      </div>

    );
  }
}

export default withRouter(HostingIndexItem);
