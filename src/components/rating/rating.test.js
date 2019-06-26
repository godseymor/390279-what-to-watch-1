import React from "react";
import renderer from "react-test-renderer";
import Rating from "./rating.jsx";

const mocks = {
  activeStar: `1`,
  onStarClick: jest.fn()
};

describe(`Rating:`, () => {
  it(`Сorrectly rendered after reload`, () => {
    const tree = renderer.create(<Rating {...mocks} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
