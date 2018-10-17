import React from 'react';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hosting_id: this.props.hosting.id,
      author_id: this.props.author.id,
      title: '',
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
      <div>
        <form onSubmit={this.submitReview}>
          <label>title:
            <input
              onChange={this.update('title')}
              value={this.state.title}>
            </input>
          </label>
          <label>review:
            <textarea value={this.state.body}
              onChange={this.update('body')}/>
          </label>
          <input type='submit' value='Add Review'></input>
        </form>
      </div>
    );
  }

}

export default ReviewForm;
