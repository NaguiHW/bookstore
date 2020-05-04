import uniqid from 'uniqid';

const initialState = {
  books: [
    {
      id: uniqid(),
      title: 'Steve Jobs',
      category: 'Biography',
    },
    {
      id: uniqid(),
      title: 'It',
      category: 'Horror',
    },
    {
      id: uniqid(),
      title: 'Ruby on Rails Tutorials',
      category: 'Learning',
    },
  ],
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_BOOK': return {
      books: [...state.books, action.book],
    };
    case 'REMOVE_BOOK': return {
      books: state.books.filter(book => book.id !== action.id),
    };
    default: return state;
  }
};

export default bookReducer;
