import films from "../mocks/films";

const intialState = {
  genreFilter: `all`,
  films
};

const ActionCreator = {
  changeGenre: (value) => {
    if (
      [
        `comedy`,
        `crime`,
        `documentary`,
        `drama`,
        `horror`,
        `family`,
        `romance`,
        `sci-fi`,
        `thriller`
      ].find((item) => item === value)
    ) {
      const filmsNew = films.filter((item) => item.movieGenre === value);
      return {
        type: `CHANGE_GENRE`,
        genreNew: value,
        filmsNew
      };
    }
    return {
      type: `RESET`
    };
  }
};

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case `CHANGE_GENRE`:
      return Object.assign({}, state, {
        genreFilter: action.genreNew,
        films: action.filmsNew
      });
    case `RESET`:
      return Object.assign({}, intialState);
  }
  return state;
};

export {ActionCreator, reducer};

