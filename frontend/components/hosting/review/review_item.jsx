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
      <ul>
        <h3>title:{review.title}</h3>
        <li>{review.body}</li>
        <li>by:{review.username}</li>
        {deleteButton()}
      </ul>
    );

  }

}

export default ReviewItem;
