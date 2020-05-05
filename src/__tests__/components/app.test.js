import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../../components/app';
import ProviderMock from '../../__mocks__/ProviderMock';
import Book from '../../components/book';

describe('<App />', () => {
  const app = shallow(
    <ProviderMock>
      <Book />
    </ProviderMock>,
  );

  it('Should render the App component', () => {
    expect(app.length).toEqual(1);
  });
});
