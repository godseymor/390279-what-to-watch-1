import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {Router} from "react-router-dom";
import history from "./history";
import {composeWithDevTools} from "redux-devtools-extension/developmentOnly";

import App from "./components/app/app.jsx";
import {createAPI} from "./api";
import reducer from "./reducers/index";
import {operationLoadFilms, operationLoadPromo} from "./reducers/films-data/films-data";

const init = () => {
  const api = createAPI((...args) => store.dispatch(...args));

  const store = createStore(
      reducer,
      composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api)))
  );

  store.dispatch(operationLoadFilms());
  store.dispatch(operationLoadPromo());

  ReactDOM.render(
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>,
      document.querySelector(`#root`)
  );
};

init();
