import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {Reviews} from "./reviews.jsx";

Enzyme.configure({adapter: new Adapter()});

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
  it(`Return text from date`, () => {
    const reviews = mount(<Reviews {...mocks} />);
    expect(reviews.instance()._formDate(`2019-06-13T02:34:24.531Z`)).toEqual(`5 13, 2019.`);
  });
});
