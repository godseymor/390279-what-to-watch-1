import React from "react";
import PropTypes from "prop-types";

const MovieCard = (props) => {
  const {movie, onTitleClick, onHover} = props;

  return <article className="small-movie-card catalog__movies-card" onMouseEnter={() => onHover(movie.movieTitle)}>
    <button className="small-movie-card__play-btn" type="button" onClick={() => onTitleClick(movie.movieTitle)}>Play</button>
    <div className="small-movie-card__image">
      <img src={`${movie.movieImageSrc}`} alt={`${movie.movieTitle}`} width="280" height="175" />
    </div>
    <h3 className="small-movie-card__title" onClick={() => onTitleClick(movie.movieTitle)}>
      <a className="small-movie-card__link" href="movie-page.html">{movie.movieTitle}</a>
    </h3>
  </article>;
};

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
  onTitleClick: PropTypes.func.isRequired,
  onHover: PropTypes.func.isRequired
};

export default MovieCard;
