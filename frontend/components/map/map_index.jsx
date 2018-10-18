import React from 'react';
import { withRouter } from 'react-router-dom';

class MapIndex extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      open: false,
    }
  }

  handleClick(e) {
    e.preventDefault();
    this.props.history.push(`/hostings/${this.props.hosting.id}`);
  }



  render() {
    // const content = () => {
    //   if (this.state.open) {
    //     return <div className='map-info'>Hello</div>;
    //   } else {
    //     return (<div className='map-index-item'
    //      onClick={this.handleClick}>
    //     <h3>{this.props.hosting.address}</h3>
    //     <i className="material-icons">local_hotel</i>
    //     </div>);
    //   }
    // };
    // const content = this.state.open ? (<div className='map-index-item'
    //   onClick={this.handleClick}>
    //     <h3>{this.props.hosting.address}</h3>
    //     <i className="material-icons">local_hotel</i>
    //     </div>) : (<div className='map-info'>Hello</div>);
    return (
      <div className='map-index-item'
        onClick={this.handleClick}>
        <div className='map-info-container'>
          <span className='username-icon-container'>
          <i className="fas fa-user-circle"></i>
          <p>{this.props.hosting.host.username}</p>
        </span>
          <h3>{this.props.hosting.address}</h3>
        </div>
          <i className="material-icons">local_hotel</i>
          </div>
    );
  }
}
export default withRouter(MapIndex);
