import React from 'react';
import renderer from 'react-test-renderer';
import MovieCard from './movie-card';

it(`renders correctly`, () => {

  const movie = {
    movieTitle: `test`,
    movieImageSrc: `test.png`
  };

  const tree = renderer
    .create(<MovieCard movie={movie} onTitleClick={jest.fn()} onHover={jest.fn()}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
