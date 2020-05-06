import uniqid from 'uniqid';

const bookListMock = {
  booksFiltered: [
    {
      id: uniqid(),
      title: 'Steve Jobs',
      category: 'Biography',
    },
  ],
  handleRemoveBook: jest.fn(),
};

export default bookListMock;
