import React from 'react';
import { shallow, mount } from 'enzyme';
import Book from '../../components/book';
import bookMock from '../../__mocks__/bookMock';
import TableMock from '../../__mocks__/tableMock';

describe('<Book />', () => {
  const {
    id, title, category, handleRemoveBook,
  } = bookMock;
  const book = shallow(
    <TableMock>
      <Book
        id={id}
        title={title}
        category={category}
        handleRemoveBook={handleRemoveBook}
      />
    </TableMock>,
  );

  const wrapper = mount(
    <TableMock>
      <Book
        id={id}
        title={title}
        category={category}
        handleRemoveBook={handleRemoveBook}
      />
    </TableMock>,
  );

  it('Should render the Book component', () => {
    expect(book.length).toEqual(1);
  });

  it('Should render the Book content', () => {
    expect(wrapper.find('.book-title').text()).toEqual('Steve Jobs');
  });

  it('Test the "RREMOVE BOOK" button', () => {
    wrapper.find('button').simulate('click');
    expect(handleRemoveBook).toHaveBeenCalledTimes(1);
  });
});
