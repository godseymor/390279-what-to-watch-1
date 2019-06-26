import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MovieAbout from "./movie-about.jsx";

Enzyme.configure({adapter: new Adapter()});

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

describe(`Details:`, () => {
  it(`Return movie time in text format, time > 60`, () => {
    const movieAbout = shallow(<MovieAbout {...mocks} />);

    expect(movieAbout.instance()._formTime(61)).toEqual(`1h 1m`);
  });

  it(`Return movie time in text format, time < 60`, () => {
    const movieAbout = shallow(<MovieAbout {...mocks} />);

    expect(movieAbout.instance()._formTime(59)).toEqual(`59m`);
  });
});
