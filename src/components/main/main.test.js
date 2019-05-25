import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main';
import films from '../../mocks/films';
import {reducer} from "../../reducers/reducer.js";

import {createStore} from "redux";
import {Provider} from "react-redux";

it(`renders correctly`, () => {
  const store = createStore(reducer);
  const tree = renderer
    .create(
        <Provider store={store}>
          <Main films={films} onTitleClick={jest.fn()}/>
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
