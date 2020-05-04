import React from 'react';
import { connect } from 'react-redux';
import uniqid from 'uniqid';
import PropTypes from 'prop-types';
import Book from '../components/book';
import { REMOVE_BOOK, CHANGE_FILTER } from '../actions';
import CategoryFilter from '../components/categoryFilter';

import './bookList.scss';

const BooksList = ({
  books, filter, handleRemoveBook, handleFilterChange,
}) => {
  const booksFiltered = filter === 'All' ? books : books.filter(book => book.category === filter);

  return (
    <div>
      <CategoryFilter handleFilterChange={category => handleFilterChange(category)} />
      <table>
        <tbody>
          {booksFiltered.map(book => (
            <Book
              id={book.id}
              title={book.title}
              category={book.category}
              key={uniqid()}
              handleRemoveBook={() => handleRemoveBook(book.id)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = state => ({
  books: state.bookReducer.books,
  filter: state.filterReducer.category,
});

BooksList.propTypes = {
  books: PropTypes.oneOfType([PropTypes.any]).isRequired,
  filter: PropTypes.oneOfType([PropTypes.any]).isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  handleRemoveBook: book => dispatch(REMOVE_BOOK(book)),
  handleFilterChange: book => dispatch(CHANGE_FILTER(book)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
