import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import reducer from "../../reducers/index";
import {createStore} from "redux";
import {Main} from "./main.jsx";

Enzyme.configure({adapter: new Adapter()});

const mocks = {
  authorized: true,
  activeGenre: `All genres`,
  onGenreChange: jest.fn(),
  onShowMoreClick: jest.fn(),
  onActiveFilmSet: jest.fn(),
  onPlayerToggle: jest.fn(),
  onAddFilmToFavorite: jest.fn(),
  history: {
    push: jest.fn()
  },
  activeFilm: {
    backgroundImage: `image`,
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
  },
  genres: [`All genres`, `Action`, `Drama`, `Comedy`],
  films: [
    {
      backgroundImage: `image`,
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
    },
    {
      backgroundImage: `image`,
      description: `description2`,
      director: `Director2`,
      genre: `Drama`,
      id: 2,
      isFavorite: true,
      name: `Title2`,
      poster: `string`,
      posterImage: `string`,
      preview: `string`,
      rating: 5,
      released: 2019,
      runTime: 12345,
      scoresCount: 2000,
      starring: [`2`, `3`, `4`],
      videoLink: `link`
    },
    {
      backgroundImage: `image`,
      description: `description3`,
      director: `Director3`,
      genre: `Comedy`,
      id: 3,
      isFavorite: false,
      name: `Title3`,
      poster: `string`,
      posterImage: `string`,
      preview: `string`,
      rating: 10,
      released: 1998,
      runTime: 123,
      scoresCount: 1,
      starring: [`4`, `9`, `10`],
      videoLink: `link`
    }
  ],
  visibleFilms: [
    {
      backgroundImage: `color`,
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
    },
    {
      backgroundImage: `color`,
      description: `description2`,
      director: `Director2`,
      genre: `Drama`,
      id: 2,
      isFavorite: true,
      name: `Title2`,
      poster: `string`,
      posterImage: `string`,
      preview: `string`,
      rating: 5,
      released: 2019,
      runTime: 12345,
      scoresCount: 2000,
      starring: [`2`, `3`, `4`],
      videoLink: `link`
    },
    {
      backgroundImage: `color`,
      description: `description3`,
      director: `Director3`,
      genre: `Comedy`,
      id: 3,
      isFavorite: false,
      name: `Title3`,
      poster: `string`,
      posterImage: `string`,
      preview: `string`,
      rating: 10,
      released: 1998,
      runTime: 123,
      scoresCount: 1,
      starring: [`4`, `9`, `10`],
      videoLink: `link`
    }
  ]
};

describe(`Main:`, () => {
  const store = createStore(reducer);

  it(`addFilmToFavorite correctly run after button click`, () => {
    const main = mount(
        <Provider store={store}>
          <BrowserRouter>
            <Main {...mocks} />
          </BrowserRouter>
        </Provider>
    );

    const addToFavoriteButton = main.find(`.btn--list`);
    addToFavoriteButton.simulate(`click`, {preventDefault() {}});
    expect(mocks.onAddFilmToFavorite).toHaveBeenCalledTimes(1);
  });

  it(`onPlayerToggle correctly run after button click`, () => {
    const main = mount(
        <Provider store={store}>
          <BrowserRouter>
            <Main {...mocks} />
          </BrowserRouter>
        </Provider>
    );

    const playButton = main.find(`.btn--play`);
    playButton.simulate(`click`, {preventDefault() {}});
    expect(mocks.onPlayerToggle).toHaveBeenCalledTimes(1);
  });

  it(`Check showmore button`, () => {
    const main = mount(
        <Provider store={store}>
          <BrowserRouter>
            <Main {...mocks} />
          </BrowserRouter>
        </Provider>
    );

    expect(main.exists(`.catalog__more`)).toEqual(false);
  });
});
