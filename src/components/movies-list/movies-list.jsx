import React from "react";
import {shape, arrayOf, string, func, number} from "prop-types";

import withActiveItem from "../../hocs/with-active-item/with-active-item.jsx";
import SmallMovieCard from "../movie-card/movie-card.jsx";

const MoviesList = (props) => {
  const {films, changeActiveItem: handelActiveCardChange} = props;

  return (
    <div className="catalog__movies-list">
      {films.map((film) => (
        <SmallMovieCard
          key={`${film.id}${film.name}`}
          id={film.id}
          title={film.name}
          poster={film.poster}
          preview={film.preview}
          onSmallCardEnter={handelActiveCardChange}
        />
      ))}
    </div>
  );
};

MoviesList.propTypes = {
  films: arrayOf(
      shape({
        id: number.isRequired,
        name: string.isRequired,
        genre: string.isRequired,
        poster: string.isRequired,
        preview: string.isRequired
      })
  ).isRequired,
  changeActiveItem: func.isRequired
};

export {MoviesList};

export default withActiveItem(MoviesList);
