import React from 'react';
import renderer from 'react-test-renderer';
import MovieCard from './movie-card';

it(`renders correctly`, () => {

  const movie = {
    movieId: `1`,
    movieTitle: `test`,
    movieImageSrc: `test.png`,
    moviePreview: `video.mp4`
  };

  const tree = renderer
    .create(<MovieCard movie={movie} onTitleClick={jest.fn()} onHover={jest.fn()}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
