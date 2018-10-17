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
        return <button className="button" onClick={this.handleDelete}>Delete</button>;
      }

      return null;
    };

    return (
      <div className='review-item-container'>

      <ul>
        <div className='review-profile'>
          <i class="fas fa-user-circle"></i>
          <h2>{review.username}</h2>
        </div>
        <h3>title:{review.title}</h3>
        <li>{review.body}</li>
        {deleteButton()}
      </ul>
    </div>
    );

  }

}

export default ReviewItem;
