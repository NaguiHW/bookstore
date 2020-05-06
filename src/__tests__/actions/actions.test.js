import { REMOVE_BOOK, CHANGE_FILTER, ADD_BOOK } from '../../actions/index';
import actionsMock from '../../__mocks__/actionsMock';

describe('Tesing Actions', () => {
  const { id, book, category } = actionsMock;

  it('ADD_BOOK action', () => {
    const expected = {
      type: 'ADD_BOOK',
      book,
    };
    expect(ADD_BOOK(book)).toEqual(expected);
  });

  it('REMOVE_BOOK action', () => {
    const expected = {
      type: 'REMOVE_BOOK',
      id,
    };
    expect(REMOVE_BOOK(id)).toEqual(expected);
  });

  it('CHANGE_FILTER action', () => {
    const expected = {
      type: 'CHANGE_FILTER',
      category,
    };
    expect(CHANGE_FILTER(category)).toEqual(expected);
  });
});
