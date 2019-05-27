import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import MovieCard from '../movie-card/movie-card.jsx';

class MoviesList extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {films, onTitleClick} = this.props;
    return (
      <div className="catalog__movies-list">
        {films.map((movie, i) => <MovieCard movie={movie} key={i} onTitleClick={onTitleClick} />)}
      </div>
    );
  }
}


MoviesList.propTypes = {
  films: PropTypes.array.isRequired,
  onTitleClick: PropTypes.func
};

const mapStateToProps = (state, ownProps) =>
  Object.assign({}, ownProps, {
    films: state.films
  });

export {MoviesList};

export default connect(mapStateToProps)(MoviesList);
