import {arrayOf, string, func} from "prop-types";
import React from "react";
import withActiveItem from "../../hocs/with-active-item/with-active-item.jsx";

const GenresList = (props) => {
  const {
    activeItem: activeGenre,
    onActiveItemChange: handelGenreClick,
    genres
  } = props;

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => (
        <li
          key={genre}
          className={`catalog__genres-item ${genre === activeGenre ? `catalog__genres-item--active` : ``}`}
        >
          <a
            href="#"
            onClick={(evt) => {
              evt.preventDefault();
              handelGenreClick(genre);
            }}
            className="catalog__genres-link"
          >
            {genre}
          </a>
        </li>
      ))}
    </ul>
  );
};

GenresList.propTypes = {
  genres: arrayOf(string.isRequired),
  activeItem: string.isRequired,
  onActiveItemChange: func.isRequired
};

export default withActiveItem(GenresList);
