import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {MovieCard} from "./movie-card.jsx";

Enzyme.configure({adapter: new Adapter()});

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
  it(`onGenreChange and onActiveFilmSet correctly run after click`, () => {
    const movieCard = mount(<MovieCard {...mocks} />);

    movieCard.simulate(`click`, {preventDefault() {}});
    expect(mocks.onGenreChange).toHaveBeenCalledTimes(1);
    expect(mocks.onActiveFilmSet).toHaveBeenCalledTimes(1);
  });
});
