import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main';
import films from '../../mocks/films';

it(`renders correctly`, () => {
  const tree = renderer
    .create(<Main films={films} onTitleClick={jest.fn()}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
