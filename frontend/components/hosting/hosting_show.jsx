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
    transform             : 'translate(-50%, -50%)',
  }
};

class HostingShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bookingModalOpen: false,
      reviewModalOpen: false,
      successModalOpen: false,
    };
    this.openBookingModal = this.openBookingModal.bind(this);
    this.closeBookingModal = this.closeBookingModal.bind(this);
    this.openReviewModal = this.openReviewModal.bind(this);
    this.closeReviewModal = this.closeReviewModal.bind(this);
    // this.openSuccessModal = this.openSuccessModal.bind(this);
    // this.closeSuccessModal = this.closeSuccessModal.bind(this);
  }
  componentDidMount() {
    debugger
  }
  componentWillMount() {
    Modal.setAppElement('body');
  }

  openBookingModal() {
    this.setState({ bookingModalOpen: true });
  }

  closeBookingModal() {
    this.setState({ bookingModalOpen: false });
  }

  openReviewModal() {
    this.setState({ reviewModalOpen: true });
  }

  closeReviewModal() {
    this.setState({
      reviewModalOpen: false,
    });
  }

  render() {

    return (
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

export default HostingShow;
