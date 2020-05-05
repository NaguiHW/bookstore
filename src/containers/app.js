import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import BooksList from '../components/bookList';
import BooksForm from '../components/booksForm';
import CategoryFilter from '../components/categoryFilter';
import { REMOVE_BOOK, CHANGE_FILTER } from '../actions';
import './app.scss';

const App = ({
  handleFilterChange, filter, books, handleRemoveBook,
}) => {
  const booksFiltered = filter === 'All' ? books : books.filter(book => book.category === filter);

  return (
    <div className="container">
      <CategoryFilter handleFilterChange={category => handleFilterChange(category)} />
      <BooksList booksFiltered={booksFiltered} handleRemoveBook={handleRemoveBook} />
      <BooksForm />
    </div>
  );
};

App.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
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
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
