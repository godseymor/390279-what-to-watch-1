import React from 'react';
import renderer from 'react-test-renderer';
import {MoviesList} from './movies-list';
import films from '../../mocks/films';

it(`moviesList renders correctly`, () => {

  const tree = renderer
    .create(<MoviesList
      films={films}
      onTitleClick={jest.fn()}
      onHover={jest.fn()}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
