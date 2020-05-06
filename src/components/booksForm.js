import React from 'react';
import PropTypes from 'prop-types';
import './booksForm.scss';

const BooksForm = ({ handleChange, handleSubmit, categories }) => (
  <div className="form-area">
    <div className="title-form">ADD NEW BOOK</div>
    <form className="books-form" onSubmit={handleSubmit}>
      <input id="create-course-form" type="text" placeholder="Book title" name="title" onChange={handleChange} />
      <div className="styled-select">
        <select onChange={handleChange} name="category" className="select-box">
          {
            categories.map(category => (
              <option value={category} key={category}>{category}</option>
            ))
          }
        </select>
      </div>
      <button type="submit">ADD BOOK</button>
    </form>
  </div>
);

BooksForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  categories: PropTypes.oneOfType([PropTypes.any]).isRequired,
};

export default BooksForm;
