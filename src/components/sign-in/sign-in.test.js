import React from "react";
import renderer from "react-test-renderer";
import {SignIn} from "./sign-in.jsx";

const mocks = {
  onHomeRedirect: jest.fn(),
  onChangeAuthorizationStatus: jest.fn(),
  onEmailValidate: jest.fn(),
  onPasswordValidate: jest.fn(),
  emailError: false,
  passwordError: false,
  authorizationFailed: false,
  authorized: true,
  history: {
    push: jest.fn()
  }
};

describe(`SignIn:`, () => {
  it(`Сorrectly rendered after reload`, () => {
    const tree = renderer.create(<SignIn {...mocks} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
