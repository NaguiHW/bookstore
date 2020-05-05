import uniqid from 'uniqid';

const bookMock = {
  id: uniqid(),
  title: 'Steve Jobs',
  category: 'Biography',
  handleRemoveBook: jest.fn(),
};

export default bookMock;
