import React from "react";
import PropTypes from "prop-types";

import Player from '../player/player.jsx';

const settings = {
  width: 280,
  height: 175
};

const MovieCard = (props) => {
  const {movie, onTitleClick, isPlaying, onChange} = props;
  const {movieId, movieTitle, movieImageSrc, moviePreview} = movie;
  const {width, height} = settings;

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={() => onChange(movieId)}
      onMouseLeave={onChange}>
      <div className="small-movie-card__image">
        <Player
          moviePoster={movieImageSrc}
          moviePreview={moviePreview}
          settings={{width, height, isMuted: true}}
          isPlaying={isPlaying}
        />
      </div>
      <h3 className="small-movie-card__title" onClick={onTitleClick}>
        <a className="small-movie-card__link" href="movie-page.html">{movieTitle}</a>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    movieId: PropTypes.string.isRequired,
    movieTitle: PropTypes.string.isRequired,
    movieImageSrc: PropTypes.string.isRequired,
    moviePreview: PropTypes.string.isRequired,
  }).isRequired,
  onTitleClick: PropTypes.func.isRequired,
  onChange: PropTypes.func,
  isPlaying: PropTypes.bool
};

export default MovieCard;
