import React from 'react';
import uniqid from 'uniqid';
import PropTypes from 'prop-types';
import Book from './book';
import './bookList.scss';

const BooksList = ({ booksFiltered, handleRemoveBook }) => (
  <div>
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

BooksList.propTypes = {
  booksFiltered: PropTypes.oneOfType([PropTypes.any]).isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

export default BooksList;
