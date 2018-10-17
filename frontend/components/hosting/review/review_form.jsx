import React from 'react';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hosting_id: this.props.hosting.id,
      author_id: this.props.author.id,
      title: 'no-title',
      body: '',
    };
    this.submitReview = this.submitReview.bind(this);
    this.update = this.update.bind(this);
  }

  update(field) {
    return (e) => this.setState({ [field]: e.target.value });
  }

  submitReview(e) {
    e.preventDefault();
    this.props.createReview(this.state);
    this.props.closeModal();
  }

  render() {
    return (
      <div className='review-form-container'>
        <h1>Share you experience</h1>
        <form onSubmit={this.submitReview}>
            <textarea value={this.state.body}
              placeholder='Type your review here...'
              onChange={this.update('body')}/>
            <input type='submit' value='Post'></input>
        </form>
      </div>
    );
  }

}

export default ReviewForm;
