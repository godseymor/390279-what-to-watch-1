import React from "react";
import renderer from "react-test-renderer";
import {MovieCard} from "./movie-card.jsx";

const mocks = {
  id: 1,
  title: `title`,
  poster: `poster`,
  preview: `prev`,
  genre: `Action`,
  onGenreChange: jest.fn(),
  onActiveFilmSet: jest.fn(),
  history: {
    push: jest.fn()
  }
};

describe(`MovieCard:`, () => {
  it(`Сorrectly rendered after reload`, () => {
    const tree = renderer.create(<MovieCard {...mocks} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
