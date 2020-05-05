import React from 'react';
import { shallow, mount } from 'enzyme';
import BooksForm from '../../components/booksForm';

describe('<BooksForm />', () => {
  const booksForm = shallow(<BooksForm />);
  const wrapper = mount(<BooksForm />);

  it('Should render the BooksForm component', () => {
    expect(booksForm.length).toEqual(1);
  });

  // it('Test the "ADD BOOK" button', () => {
  //   wrapper.find('button').simulate('click');
  //   expect(handleSubmit)
  // });
});
