import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';
import BooksList from '../components/bookList';
import BooksForm from '../components/booksForm';
import CategoryFilter from '../components/categoryFilter';
import { REMOVE_BOOK, CHANGE_FILTER, ADD_BOOK } from '../actions';
import './app.scss';

const App = ({
  handleFilterChange, filter, books, handleRemoveBook, addBook,
}) => {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const [state, setState] = useState({
    title: '',
    category: categories[0],
    id: uniqid(),
  });
  const booksFiltered = filter === 'All' ? books : books.filter(book => book.category === filter);
  const handleChange = event => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = event => {
    event.preventDefault();
    if (state.title !== '') {
      addBook(state);
      setState({
        ...state,
        title: '',
        id: uniqid(),
      });
      document.getElementById('create-course-form').value = '';
    }
  };

  return (
    <div className="container">
      <CategoryFilter handleFilterChange={category => handleFilterChange(category)} />
      <BooksList booksFiltered={booksFiltered} handleRemoveBook={handleRemoveBook} />
      <BooksForm handleChange={handleChange} handleSubmit={handleSubmit} categories={categories} />
    </div>
  );
};

App.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
  addBook: PropTypes.func.isRequired,
  filter: PropTypes.oneOfType([PropTypes.any]).isRequired,
  books: PropTypes.oneOfType([PropTypes.any]).isRequired,
};

const mapStateToProps = state => ({
  books: state.bookReducer.books,
  filter: state.filterReducer.category,
});

const mapDispatchToProps = dispatch => ({
  handleRemoveBook: book => dispatch(REMOVE_BOOK(book)),
  handleFilterChange: book => dispatch(CHANGE_FILTER(book)),
  addBook: book => dispatch(ADD_BOOK(book)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
