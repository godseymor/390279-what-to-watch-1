import React from "react";
import renderer from "react-test-renderer";
import MovieAbout from "./movie-about.jsx";

const mocks = {
  activeFilm: {
    backgroundImage: `back`,
    description: `description`,
    director: `Director`,
    genre: `Action`,
    id: 1,
    isFavorite: false,
    name: `Title`,
    poster: `string`,
    posterImage: `string`,
    preview: `string`,
    rating: 5,
    released: 2018,
    runTime: 88,
    scoresCount: 2000,
    starring: [`1`, `2`, `3`],
    videoLink: `link`
  }
};

describe(`MovieAbout:`, () => {
  it(`Сorrectly rendered after reload`, () => {
    const tree = renderer.create(<MovieAbout {...mocks} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
