import React from "react";
import ReactDOM from "react-dom";
import Main from "./components/main/main.jsx";

const init = () => {
  const movieTitleClickHandler = () => null;

  const movies = [
    `Fantastic Beasts`,
    `Bohemian Rhapsody`,
    `Macbeth`,
    `Aviator`
  ];

  ReactDOM.render(
      <Main
        movies = {movies}
        onTitleClick = {movieTitleClickHandler}
      />,
      document.querySelector(`#root`)
  );
};

init();
