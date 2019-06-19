import React from "react";
import renderer from "react-test-renderer";

import SmallMovieCard from "./movie-card.jsx";

const mocks = {
  id: 1,
  title: `John Wick`,
  poster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  functionHandler: jest.fn()
};

describe(`MovieCard:`, () => {
  it(`Correctly renders after relaunch`, () => {
    const tree = renderer
      .create(
          <SmallMovieCard
            id={mocks.id}
            title={mocks.title}
            poster={mocks.poster}
            preview={mocks.preview}
            onSmallCardEnter={mocks.functionHandler}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
