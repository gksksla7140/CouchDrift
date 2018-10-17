import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import Moment from 'moment';
import HostingDetail from './hosting_detail';
import ReviewItemContainer from './review/review_item_container';
import BookingFormContainer from './booking/booking_form_container';
import ReviewFormContainer from './review/review_form_container';
  const modalStyle = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    width: '400px',
    height: '100px',
    overflow: 'visible',
  }
};

const statusStyle = {
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
      bookingModalOpen: false,
      reviewModalOpen: false,
      successModalOpen: false,
      errorModalOpen: false,
    };
    this.openBookingModal = this.openBookingModal.bind(this);
    this.closeBookingModal = this.closeBookingModal.bind(this);
    this.openReviewModal = this.openReviewModal.bind(this);
    this.closeReviewModal = this.closeReviewModal.bind(this);
    this.openSuccessModal = this.openSuccessModal.bind(this);
    this.closeSuccessModal = this.closeSuccessModal.bind(this);
    this.openErrorModal = this.openErrorModal.bind(this);
    this.closeErrorModal = this.closeErrorModal.bind(this);
    this.renderImage = this.renderImage.bind(this);
  }

  componentDidMount() {
    this.props.fetchReviews(this.props.hostingId);
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

  openErrorModal() {
    this.setState({ errorModalOpen: true });
  }

  closeErrorModal() {
    this.setState({ errorModalOpen: false });
  }

  openReviewModal() {
    this.setState({ reviewModalOpen: true });
  }

  closeReviewModal() {
    this.setState({
      reviewModalOpen: false,
    });
  }

  openSuccessModal() {
    this.setState({ successModalOpen: true });
  }

  renderImage() {
    return (
      <div className='image-container'>
      <div className = 'hosting-show-img'
         style = {{ backgroundImage: 'url(' + this.props.hosting.img_url + ')',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    backgroundRepeat: 'no-repeat',
                  }}>


    </div>
  </div>
  );

  }

  closeSuccessModal() {
    this.setState({ successModalOpen: false });
  }

  render() {
    const reviews = this.props.reviews.reverse().map(
      (review, idx) =>  <ReviewItemContainer key={idx} review= {review} hosting={this.props.hosting} />
  );
    const host = this.props.hosting.host;
    const hosting = this.props.hosting;
    const sex = host.sex === 'M' ? <i class="fas fa-male"></i> : <i class="fas fa-female"></i>;

    return (
      <div className='show-container'>
        <div className='show-img-title-container'>
          {this.renderImage()}
          <div className='show-banner'>
            <h1>{this.props.hosting.address}</h1>
          </div>
        </div>



        <div className='show-body'>
          <div className='about-container'>
            <div className='about-icon'>
              <h1>About</h1>
              <div className='about-by'>
                <div className='host-icon'>{sex}</div>
                <div className='hosted-by-container'>
                  <div className='hosted-by'>Hosted By</div>
                  <div className='host-name'>{host.fname + ' ' + host.lname}</div>
                    <ul className='rating-star'>
                      <span className='fas fa-star checked'></span>
                      <span className='fas fa-star checked'></span>
                      <span className='fas fa-star checked'></span>
                      <span className='far fa-star'></span>
                      <span className='far fa-star'></span>
                    </ul>
                </div>
              </div>
            </div>
          <div className='host-info'>
            <ul>
              <li>email: {host.email}</li>
              <li>age: {host.age} </li>
              <li>about:</li>
              <li>{host.about}</li>
            </ul>
          </div>
          </div>

        <HostingDetail hosting={this.props.hosting}/>
        <h1 className='review-header'> Reviews</h1>
        {reviews}
        <button onClick={this.openReviewModal}>Add a Review</button>
      </div>
      <Modal
          isOpen={this.state.bookingModalOpen}
          onRequestClose={this.closeBookingModal}
          style={modalStyle}
          contentLabel="Booking Modal"
        >
        <BookingFormContainer
          closeErrorModal={this.closeErrorModal}
            openErrorModal={this.openErrorModal}
            openSuccessModal={this.openSuccessModal}
            closeSuccessModal={this.closeSuccessModal}
            closeModal={this.closeBookingModal}
            hosting={this.props.hosting}
            />

        </Modal>

        <button onClick={this.openBookingModal}>Book</button>
          <Modal
             isOpen={this.state.successModalOpen}
             onRequestClose={this.closeSuccessModal}
             contentLabel='Success Modal'
             style={statusStyle}>
             <div className='success-modal mod-positive'>
               Success!
             </div>
           </Modal>

           <Modal
             isOpen={this.state.reviewModalOpen}
             onRequestClose={this.closeReviewModal}
             contentLabel='Review Modal'
             style={modalStyle}>
             <ReviewFormContainer
               openSuccessModal={this.openSuccessModal}
               closeSuccessModal={this.closeSuccessModal}
               closeModal={this.closeReviewModal}
               hosting={this.props.hosting}/>
           </Modal>
         <Modal
            isOpen={this.state.errorModalOpen}
            onRequestClose={this.closeErrorModal}
            contentLabel='error Modal'
            style={statusStyle}>
            <div className='error-modal'>
              Oops Someone already book those dates!
            </div>
          </Modal>
      </div>
    );
  }
}

export default HostingShow;
