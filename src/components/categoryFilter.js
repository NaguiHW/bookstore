import React from 'react';
import PropTypes from 'prop-types';
import './categoryFilter.scss';

const categories = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const CategoryFilter = ({ handleFilterChange }) => (
  <ul className="navbar">
    <li><h1 className="title">Bookstore CMS</h1></li>
    <li className="book-category">BOOK CATEGORY: </li>
    <li>
      <select name="categories" onChange={event => handleFilterChange(event.target.value)}>
        {
          categories.map(category => (
            <option value={category} key={category}>{category}</option>
          ))
        }
      </select>
    </li>
    <li className="icon"><i className="fas fa-user" /></li>
  </ul>
);

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
