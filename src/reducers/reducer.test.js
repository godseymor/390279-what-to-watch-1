import {reducer} from "./reducer";
import films from "../mocks/films.js";

describe(`Reducer works correctly`, () => {
  it(`Reducer without additional parameters should return inital state`, () => {
    expect(reducer(undefined, {})).toEqual({
      genreFilter: `all`,
      films
    });
  });

  it(`Reducer test reset`, () => {
    expect(
        reducer(
            {
              genreFilter: `comedy`,
              films: [
                {
                  movieTitle: `Fantastic Beasts: The Crimes of Grindelwald`,
                  movieImageSrc: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
                  moviePreview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
                  movieGenre: `comedy`
                }
              ]
            },
            {
              type: `RESET`
            }
        )
    ).toEqual({
      genreFilter: `all`,
      films
    });
  });
  it(`Reducer test change genre`, () => {
    expect(
        reducer(
            {
              genreFilter: `all`,
              films
            },
            {
              type: `CHANGE_GENRE`,
              genreNew: `comedy`,
              filmsNew: [
                {
                  movieTitle: `Fantastic Beasts: The Crimes of Grindelwald`,
                  movieImageSrc: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
                  moviePreview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
                  movieGenre: `comedy`
                }
              ]
            }
        )
    ).toEqual({
      genreFilter: `comedy`,
      films: [
        {
          movieTitle: `Fantastic Beasts: The Crimes of Grindelwald`,
          movieImageSrc: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
          moviePreview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
          movieGenre: `comedy`
        }
      ]
    });
  });
});
