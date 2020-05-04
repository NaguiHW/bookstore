export const ADD_BOOK = book => ({
  type: 'ADD_BOOK',
  book,
});

export const REMOVE_BOOK = id => ({
  type: 'REMOVE_BOOK',
  id,
});

export const CHANGE_FILTER = category => ({
  type: 'CHANGE_FILTER',
  category,
});
