import React from 'react';
import renderer from 'react-test-renderer';
import MovieCard from './movie-card';

it(`renders correctly`, () => {
  const onTitleClick = () => null;
  const tree = renderer
    .create(<MovieCard movies={[
      `Fantastic Beasts`,
      `Bohemian Rhapsody`,
      `Macbeth`,
      `Aviator`
    ]}
    onTitleClick={onTitleClick}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
