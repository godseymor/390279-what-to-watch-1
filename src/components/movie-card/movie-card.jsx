import React from "react";
import PropTypes from "prop-types";

const MovieCard = (props) => {
  const {movie, key, onTitleClick} = props;

  return <article className="small-movie-card catalog__movies-card" key={key}>
    <button className="small-movie-card__play-btn" type="button">Play</button>
    <div className="small-movie-card__image">
      <img src={`img/fantastic-beasts-the-crimes-of-grindelwald.jpg`} alt={`${movie}`} width="280" height="175" />
    </div>
    <h3 className="small-movie-card__title" onClick={onTitleClick}>
      <a className="small-movie-card__link" href="movie-page.html">{movie}</a>
    </h3>
  </article>;
};

MovieCard.propTypes = {
  movie: PropTypes.string.isRequired,
  key: PropTypes.number.isRequired,
  onTitleClick: PropTypes.func.isRequired
};

export default MovieCard;
