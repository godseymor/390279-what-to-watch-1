import React from "react";
import renderer from "react-test-renderer";
import VideoPlayer from "./video-player.jsx";

const mocks = {poster: `poster`, preview: `preview`};
describe(`VideoPlayer:`, () => {
  it(`Сorrectly rendered after reload`, () => {
    const tree = renderer.create(<VideoPlayer {...mocks} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
