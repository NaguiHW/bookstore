import bookReducer from '../../reducers/book';
import actionsMock from '../../__mocks__/actionsMock';

describe('Test book reducers', () => {
  const { id, book } = actionsMock;

  it('ADD_TO_CART', () => {
    const initialState = {
      books: [],
    };
    const action = {
      type: 'ADD_BOOK',
      book,
    };
    const expected = {
      books: [
        book,
      ],
    };
    expect(bookReducer(initialState, action)).toEqual(expected);
  });

  it('REMOVE_BOOK', () => {
    const initialState = {
      books: [
        book,
      ],
    };
    const action = {
      type: 'REMOVE_BOOK',
      id,
    };
    const expected = {
      books: [],
    };
    expect(bookReducer(initialState, action)).toEqual(expected);
  });
});
