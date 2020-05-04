import { combineReducers, createStore } from 'redux';
import bookReducer from './book';
import filterReducer from './filter';

const reducer = combineReducers({
  bookReducer,
  filterReducer,
});

export default createStore(reducer);
