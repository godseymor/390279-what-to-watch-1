import React from 'react';
import renderer from 'react-test-renderer';
import MovieCard from './movie-card';

it(`renders correctly`, () => {
  const onTitleClick = () => null;
  const tree = renderer
    .create(<MovieCard movie={`Fantastic Beasts`} onTitleClick={onTitleClick}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
