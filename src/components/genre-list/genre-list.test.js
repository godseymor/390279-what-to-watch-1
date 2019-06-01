import React from "react";
import renderer from "react-test-renderer";
import {GenreList} from "./genre-list.jsx";

it(`GenreList correctly renders after relaunch`, () => {
  const handleClick = jest.fn();
  const tree = renderer
    .create(<GenreList genreFilter={`all`} changeFilter={handleClick} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
