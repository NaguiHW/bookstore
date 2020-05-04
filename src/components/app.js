import React from 'react';
import { Provider } from 'react-redux';
import BooksList from '../containers/booksList';
import store from '../reducers/index';
import BooksForm from './booksForm';
import './app.scss';

const App = () => (
  <Provider store={store}>
    <div className="container">
      <BooksList />
      <BooksForm />
    </div>
  </Provider>
);

export default App;
