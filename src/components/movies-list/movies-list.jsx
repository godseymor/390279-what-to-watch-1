import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import MovieCard from '../movie-card/movie-card.jsx';

class MoviesList extends PureComponent {

  render() {
    const {activeItem, films, onChange, onTitleClick} = this.props;
    return (
      <div className="catalog__movies-list">
        {films.map((movie, i) =>
          <MovieCard
            movie={movie}
            key={i}
            onTitleClick={onTitleClick}
            isPlaying={movie.movieId === activeItem}
            onChange={onChange}
          />)}
      </div>
    );
  }
}


MoviesList.propTypes = {
  activeItem: PropTypes.string,
  onChange: PropTypes.func,
  films: PropTypes.array.isRequired,
  onTitleClick: PropTypes.func
};

const mapStateToProps = (state, ownProps) =>
  Object.assign({}, ownProps, {
    films: state.films
  });

export {MoviesList};

export default connect(mapStateToProps)(MoviesList);
