import React, { Component } from 'react';
import { connect } from 'react-redux';
import uniqid from 'uniqid';
import PropTypes from 'prop-types';
import { ADD_BOOK } from '../actions';
import './booksForm.scss';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

class BooksForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: uniqid(),
      title: '',
      category: categories[0],
    };
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { addBook } = this.props;
    const { state } = this;
    if (state.title !== '') {
      addBook(this.state);
      this.setState({ id: uniqid(), title: '' });
      document.getElementById('create-course-form').value = '';
    }
  }

  render() {
    return (
      <div className="form-area">
        <div className="title-form">ADD NEW BOOK</div>
        <form className="books-form">
          <input id="create-course-form" type="text" placeholder="Book title" name="title" onChange={this.handleChange.bind(this)} />
          <div className="styled-select">
            <select onChange={this.handleChange.bind(this)} name="category" className="select-box">
              {
                categories.map(category => (
                  <option value={category} key={category}>{category}</option>
                ))
              }
            </select>
          </div>
          <button type="submit" onClick={this.handleSubmit.bind(this)}>ADD BOOK</button>
        </form>
      </div>
    );
  }
}

BooksForm.propTypes = {
  addBook: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  addBook: book => dispatch(ADD_BOOK(book)),
});

export default connect(null, mapDispatchToProps)(BooksForm);
