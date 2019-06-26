import React from "react";
import renderer from "react-test-renderer";
import {UserBlock} from "./user-block.jsx";

const mocks = {
  authorized: true,
  user: {
    userId: 1,
    userEmail: `userEmail`,
    userName: `userName`,
    userAvatar: `userAvatar`
  },
  history: {
    push: jest.fn()
  }
};

describe(`UserBlock:`, () => {
  it(`Сorrectly rendered after reload`, () => {
    const tree = renderer.create(<UserBlock {...mocks} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
