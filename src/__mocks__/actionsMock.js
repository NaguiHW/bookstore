import uniqid from 'uniqid';

const actionsMock = {
  id: uniqid(),
  book: {
    id: uniqid(),
    title: 'Steve Jobs',
    category: 'Biography',
    handleRemoveBook: jest.fn(),
  },
  category: 'All',
};

export default actionsMock;
