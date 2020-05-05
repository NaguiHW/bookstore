import React from 'react';
import BooksList from '../containers/booksList';
import BooksForm from './booksForm';
import './app.scss';

const App = () => (
  <div className="container">
    <BooksList />
    <BooksForm />
  </div>
);

export default App;
