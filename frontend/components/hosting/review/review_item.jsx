import React from 'react';

class ReviewItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    this.props.deleteReview(this.props.review.id);
  }

  render() {
    const review = this.props.review;
    const deleteButton = () => {
      if (review.author_id === this.props.currentUser) {
        return <button className="deleteButton" onClick={this.handleDelete}>Delete</button>;
      }

      return null;
    };

    return (
      <div className='review-item-container'>

        <div className='profile-delete-container'>
        <div className='review-profile'>
          <i class="fas fa-user-circle"></i>
          <h2>{review.username}</h2>
        </div>
        {deleteButton()}
      </div>
        <div className='review-body'>{review.body}</div>

    </div>
    );

  }

}

export default ReviewItem;
