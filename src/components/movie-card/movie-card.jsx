import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import Player from '../player/player.jsx';

const settings = {
  width: 280,
  height: 175
};

class MovieCard extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false
    };

    this._mouseEnterHandler = this._mouseEnterHandler.bind(this);
    this._mouleLeaveHandler = this._mouleLeaveHandler.bind(this);
  }

  render() {
    const {movie, onTitleClick} = this.props;
    const {movieTitle, movieImageSrc, moviePreview} = movie;
    const {isPlaying} = this.state;
    const {width, height} = settings;

    return (
      <article
        ref={this._movieCardRef}
        className="small-movie-card catalog__movies-card"
        onMouseEnter={this._mouseEnterHandler}
        onMouseLeave={this._mouleLeaveHandler}>
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
  }
  _mouseEnterHandler() {
    this._timer = setTimeout(() => {
      this.setState({isPlaying: true});
    }, 1000);
  }

  _mouleLeaveHandler() {
    clearTimeout(this._timer);
    this.setState({isPlaying: false});
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    movieTitle: PropTypes.string.isRequired,
    movieImageSrc: PropTypes.string.isRequired
  }).isRequired,
  onTitleClick: PropTypes.func.isRequired
};

export default MovieCard;
