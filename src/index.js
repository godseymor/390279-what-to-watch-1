import React from "react";
import ReactDOM from "react-dom";
import Main from "./components/main/main.jsx";

import films from './mocks/films';

const onTitleClick = () => null;

const init = () => {

  ReactDOM.render(
      <Main
        films={films}
        onTitleClick={onTitleClick}
      />,
      document.querySelector(`#root`)
  );
};

init();
