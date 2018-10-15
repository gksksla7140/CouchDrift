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

    return (
          <div
          className="hosting-index-item"
          onClick={this.handleClick}
          >
          <div className="index-item-info">
            <h3 className="index-item-desc">{ this.props.hosting.address }</h3>
          </div>
        </div>

    );
  }
}

export default withRouter(HostingIndexItem);
