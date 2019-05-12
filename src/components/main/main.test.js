import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main';

it(`renders correctly`, () => {
  const onTitleClick = () => null;
  const tree = renderer
    .create(<Main movies={[
      `Fantastic Beasts`,
      `Bohemian Rhapsody`,
      `Macbeth`,
      `Aviator`
    ]}
    onTitleClick={onTitleClick}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
