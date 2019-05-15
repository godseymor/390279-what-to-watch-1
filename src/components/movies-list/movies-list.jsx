import React from "react";
import PropTypes from "prop-types";

import MovieCard from '../movie-card/movie-card.jsx';

const MoviesList = (props) => {
  const {films, onTitleClick, onHover} = props;

  return <div className="catalog__movies-list">
    {films.map((movie, i) => <MovieCard movie={movie} key={i} onTitleClick={onTitleClick} onHover={onHover} />)}
  </div>;
};

MoviesList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    movieTitle: PropTypes.string.isRequired,
    movieImageSrc: PropTypes.string.isRequired,
  })).isRequired,
  onTitleClick: PropTypes.func,
  onHover: PropTypes.func,
};

export default MoviesList;