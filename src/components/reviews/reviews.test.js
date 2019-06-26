import React from "react";
import renderer from "react-test-renderer";
import {Reviews} from "./reviews.jsx";

const mocks = {
  activeFilmId: 3,
  onLoadReviews: jest.fn(),
  onClearReviews: jest.fn(),
  reviews: [
    {
      comment: `comment`,
      date: `2019-06-13T02:34:24.531Z`,
      id: 1,
      rating: 2,
      user: {
        name: `username`
      }
    },
    {
      comment: `comment2`,
      date: `2019-05-13T02:34:24.531Z`,
      id: 2,
      rating: 8,
      user: {
        name: `username2`
      }
    }
  ]
};

describe(`Reviews:`, () => {
  it(`Сorrectly rendered after reload`, () => {
    const tree = renderer.create(<Reviews {...mocks} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
