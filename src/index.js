import React from "react";
import ReactDOM from "react-dom";
import Main from "./components/main/main.jsx";

import {createStore} from 'redux';
import {Provider} from 'react-redux';

import {reducer} from './reducers/reducer';
import films from './mocks/films';

const onTitleClick = () => null;

/* eslint-disable no-underscore-dangle */
const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */

const init = () => {

  ReactDOM.render(
      <Provider store={store}>
        <Main
          films={films}
          onTitleClick={onTitleClick}
        />
      </Provider>,
      document.querySelector(`#root`)
  );
};

init();
