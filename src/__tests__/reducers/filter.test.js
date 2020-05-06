import actionsMock from '../../__mocks__/actionsMock';
import filterReducer from '../../reducers/filter';

describe('Test filter reducer', () => {
  const { category } = actionsMock;

  it('CHANGE FILTER', () => {
    const initialState = {
      category: 'Horror',
    };
    const action = {
      type: 'CHANGE_FILTER',
      category,
    };
    const expected = {
      category,
    };
    expect(filterReducer(initialState, action)).toEqual(expected);
  });
});
