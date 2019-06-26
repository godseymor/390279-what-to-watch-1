import {number, string, func, shape} from "prop-types";
import React, {PureComponent} from "react";
import {compose} from "redux";
import {withRouter} from "react-router";
import Videoplayer from "../video-player/video-player.jsx";

class MovieCard extends PureComponent {
  constructor(props) {
    super(props);
    this._videoRef = React.createRef();
    this._handelMouseEnter = this._handelMouseEnter.bind(this);
    this._handelMouseLeave = this._handelMouseLeave.bind(this);
    this._handelLinkClick = this._handelLinkClick.bind(this);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    const {title, poster, preview, id} = this.props;

    return (
      <article
        className="small-movie-card catalog__movies-card"
        onMouseEnter={this._handelMouseEnter}
        onMouseLeave={this._handelMouseLeave}
        onClick={this._handelLinkClick}
      >
        <div className="small-movie-card__image">
          <Videoplayer preview={preview} poster={poster} ref={this._videoRef} />
        </div>
        <h3 className="small-movie-card__title">
          <a
            className="small-movie-card__link"
            href="#"
            onClick={(evt) => {
              evt.preventDefault();
            }}
            params={{id}}
          >
            {title}
          </a>
        </h3>
      </article>
    );
  }

  _handelLinkClick() {
    const {onGenreChange, onActiveFilmSet, history, genre, id} = this.props;
    onGenreChange(genre);
    onActiveFilmSet(id);
    history.push(`/film/${id}`);
  }

  _handelMouseEnter() {
    this.timer = setTimeout(
        function () {
          this._videoRef.current.video.current.play();
        }.bind(this),
        1000
    );
  }

  _handelMouseLeave() {
    if (this.timer) {
      clearTimeout(this.timer);
      this._videoRef.current.video.current.load();
    }
  }
}

MovieCard.propTypes = {
  id: number.isRequired,
  title: string.isRequired,
  poster: string.isRequired,
  preview: string.isRequired,
  genre: string.isRequired,
  onGenreChange: func.isRequired,
  onActiveFilmSet: func.isRequired,
  history: shape({
    push: func.isRequired
  }).isRequired
};

export {MovieCard};
export default compose(withRouter)(MovieCard);
