import React from 'react';
import { shallow, mount } from 'enzyme';
import BooksForm from '../../components/booksForm';
import booksFormMock from '../../__mocks__/booksFormMock';

describe('<BooksForm />', () => {
  const { handleChange, handleSubmit, categories } = booksFormMock;
  const booksForm = shallow(
    <BooksForm
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      categories={categories}
    />,
  );
  const wrapper = mount(
    <BooksForm
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      categories={categories}
    />,
  );

  it('Should render the BooksForm component', () => {
    expect(booksForm.length).toEqual(1);
  });

  it('Test the submit form', () => {
    wrapper.find('form').simulate('submit');
    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });
});
