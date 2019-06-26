import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import reducer from "../../reducers/index";
import {createStore} from "redux";
import {MoviePage} from "./movie-page.jsx";

Enzyme.configure({adapter: new Adapter()});

const mocks = {
  authorized: true,
  onPlayerToggle: jest.fn(),
  onHomeRedirect: jest.fn(),
  onAddFilmToFavorite: jest.fn(),
  onActiveFilmSet: jest.fn(),
  onGenreChange: jest.fn(),
  history: {
    push: jest.fn()
  },
  match: {
    url: `url`
  },
  activeFilm: {
    backgroundImage: `image`,
    description: `description5`,
    director: `Director5`,
    genre: `Action`,
    id: 5,
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
  visibleFilms: [
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
      genre: `Action`,
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
      genre: `Action`,
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

describe(`MoviePage:`, () => {
  const store = createStore(reducer);

  it(`addFilmToFavorite correctly run after button click`, () => {
    const moviePage = mount(
        <Provider store={store}>
          <BrowserRouter>
            <MoviePage {...mocks} />
          </BrowserRouter>
        </Provider>
    );

    const addToFavoriteButton = moviePage.find(`.btn--list`);
    addToFavoriteButton.simulate(`click`, {preventDefault() {}});
    expect(mocks.onAddFilmToFavorite).toHaveBeenCalledTimes(1);
  });

  it(`onPlayerToggle correctly run after button click`, () => {
    const moviePage = mount(
        <Provider store={store}>
          <BrowserRouter>
            <MoviePage {...mocks} />
          </BrowserRouter>
        </Provider>
    );

    const playButton = moviePage.find(`.btn--play`);
    playButton.simulate(`click`, {preventDefault() {}});
    expect(mocks.onPlayerToggle).toHaveBeenCalledTimes(1);
  });

  it(`Correctly recieve props`, () => {
    const moviePage = mount(
        <Provider store={store}>
          <BrowserRouter>
            <MoviePage {...mocks} />
          </BrowserRouter>
        </Provider>
    );

    expect(moviePage.find(`.small-movie-card`).length).toEqual(
        mocks.visibleFilms.length
    );
  });
});
