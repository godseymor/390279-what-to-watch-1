import React from "react";
import ReactDOM from "react-dom";
import Main from "./components/main/main.jsx";

const init = () => {

  const movies = [
    `Fantastic Beasts`,
    `Bohemian Rhapsody`,
    `Macbeth`,
    `Aviator`
  ];

  ReactDOM.render(
      <Main
        movies = {movies}
      />,
      document.querySelector(`#root`)
  );
};

init();
