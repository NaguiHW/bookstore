import React from 'react';
import { shallow } from 'enzyme';
import CategoryFilter from '../../components/categoryFilter';

describe('<CategoryFilter />', () => {
  const handleFilterChange = jest.fn();
  const categoryFilter = shallow(
    <CategoryFilter
      handleFilterChange={handleFilterChange}
    />,
  );

  it('Should render the CategoryFilter component', () => {
    expect(categoryFilter.length).toEqual(1);
  });
});
