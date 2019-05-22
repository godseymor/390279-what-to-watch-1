import React from 'react';
import renderer from 'react-test-renderer';

import Player from './player.jsx';

const mock = {
  movie: {
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    poster: `poster.jpg`,
    preview: `video.mp4`,
  },
};

it(`Player renders correctly`, () => {
  const props = {
    moviePreview: mock.movie.preview,
    moviePoster: mock.movie.poster,
    settings: {
      width: 280,
      height: 175,
    }
  };

  const tree = renderer.create(<Player {...props}/>).toJSON();

  expect(tree).toMatchSnapshot();
});
