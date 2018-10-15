import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import HostingDetail from './hosting_detail';


const modalStyle = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class HostingShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentWillMount() {

    Modal.setAppElement('body');
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {

    return(
      <div>
      <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={modalStyle}
          contentLabel="Example Modal"
        >
        <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
        </Modal>
        <button onClick={this.openModal}>Hello</button>
      </div>
    );
  }
}

//   return (
//     <div className="single-hosting-show">
//       <div className="single-bench-map">
//       </div>
//       <div className="right-half hosting-details">
//         <HostingDetail hosting={hosting} />
//       </div>
//     </div>
//   );
// };

export default HostingShow;
