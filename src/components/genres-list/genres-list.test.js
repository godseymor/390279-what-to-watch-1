import React from "react";
import renderer from "react-test-renderer";
import GenresList from "./genres-list.jsx";

const mocks = {
  genres: [`All genres`, `Action`, `Drama`, `Comedy`],
  activeItem: `active`,
  onActiveItemChange: jest.fn()
};

describe(`GenresList:`, () => {
  it(`Сorrectly rendered after reload`, () => {
    const tree = renderer.create(<GenresList {...mocks} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
