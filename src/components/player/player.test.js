import React from "react";
import renderer from "react-test-renderer";

import Player from "./player.jsx";

const mocks = {
  poster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
};

describe(`Videoplayer:`, () => {
  it(`Correctly renders after relaunch`, () => {
    const tree = renderer
      .create(<Player poster={mocks.poster} preview={mocks.preview} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
