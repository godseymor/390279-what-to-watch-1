import React from "react";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducers/reducer.js";
import PropTypes from "prop-types";

import genres from "../../mocks/genres";

class GenreList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: genres
    };
  }
  render() {
    return (
      <ul className="catalog__genres-list">
        {this.state.filter.map(({name, genre}, i) => (
          <li key={i} className={
            this.props.genreFilter === genre
              ? `catalog__genres-item catalog__genres-item--active`
              : `catalog__genres-item`
          }>
            <a href="#" className="catalog__genres-link" onClick={() => this.props.changeFilter(genre)}>{name}</a>
          </li>
        ))}
      </ul>
    );
  }
}

GenreList.propTypes = {
  genreFilter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) =>
  Object.assign({}, ownProps, {
    genreFilter: state.genreFilter
  });
const mapDispatchToProps = (dispatch) => ({
  changeFilter: (value) => dispatch(ActionCreator.changeGenre(value))
});

export {GenreList};

export default connect(mapStateToProps, mapDispatchToProps)(GenreList);
