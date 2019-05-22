import React, {PureComponent} from "react";
import PropTypes from "prop-types";

class Player extends PureComponent {
  constructor(props) {
    super(props);

    this._movieRef = React.createRef();

    this.state = {
      isPlaying: false,
    };
  }

  componentDidUpdate() {
    const movie = this._movieRef.current;

    this._updateMoviePlayingState();

    if (this.state.isPlaying) {
      movie.play();
    } else {
      movie.load();
    }
  }

  render() {
    const {moviePoster, moviePreview, settings} = this.props;
    const {width, height, isMuted} = settings;
    return (
      <video ref={this._movieRef} poster={moviePoster} src={moviePreview} width={width} height={height} muted={isMuted} />
    );
  }

  _updateMoviePlayingState() {
    const {isPlaying} = this.props;
    this.setState({isPlaying});
  }

}

Player.propTypes = {
  moviePoster: PropTypes.string.isRequired,
  moviePreview: PropTypes.string.isRequired,
  settings: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    isMuted: PropTypes.bool
  }),
  isPlaying: PropTypes.bool
};

export default Player;
