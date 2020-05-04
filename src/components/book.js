import React from 'react';
import PropTypes from 'prop-types';

import './book.scss';

const Book = ({
  id, title, category, handleRemoveBook,
}) => (
  <tr className="row">
    <td className="left-column">
      <span className="category">{category}</span>
      <br />
      <span className="book-title">{title}</span>
    </td>
    <td className="right-column"><button type="button" onClick={() => handleRemoveBook(id)}>REMOVE BOOK</button></td>
  </tr>
);

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

export default Book;
