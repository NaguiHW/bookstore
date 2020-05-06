import React from 'react';
import { shallow, mount } from 'enzyme';
import BooksList from '../../components/bookList';
import bookListMock from '../../__mocks__/bookListMock';

describe('<BookList />', () => {
  const { booksFiltered, handleRemoveBook } = bookListMock;
  const bookList = shallow(
    <BooksList
      booksFiltered={booksFiltered}
      handleRemoveBook={handleRemoveBook}
    />,
  );
  const wrapper = mount(
    <BooksList
      booksFiltered={booksFiltered}
      handleRemoveBook={handleRemoveBook}
    />,
  );

  it('Should render the BookList component', () => {
    expect(bookList.length).toEqual(1);
  });

  it('Should render the BookList content', () => {
    expect(wrapper.find('.book-title').text()).toEqual('Steve Jobs');
  });
});
