import {func, string} from "prop-types";
import React, {PureComponent} from "react";

const STARS_NUMBER = 5;

class Rating extends PureComponent {
  constructor(props) {
    super(props);
    this._formStars = this._formStars.bind(this);
    this._handelStarChange = this._handelStarChange.bind(this);
  }

  render() {
    const {activeStar} = this.props;

    return (
      <>
        <div className="rating">
          <div className="rating__stars">{this._formStars(activeStar)}</div>
        </div>
      </>
    );
  }
  _handelStarChange(evt) {
    const {onStarClick} = this.props;
    onStarClick(evt.target.value);
  }
  _formStars(activeStar) {
    const stars = [];
    for (let i = 1; i < STARS_NUMBER + 1; i++) {
      const checked =
        parseInt(i, 10) === parseInt(activeStar, 10) ? true : false;
      if (activeStar === null && i === 1) {
        checked = true;
      }
      stars.push(
          <input
            key={`${i}input`}
            className="rating__input"
            id={`star-${i}`}
            type="radio"
            name="rating"
            value={i}
            checked={checked}
            onChange={this._handelStarChange}
          />
      );
      stars.push(
          <label
            key={`${i}label`}
            className="rating__label"
            htmlFor={`star-${i}`}
          >
          Rating {i}
          </label>
      );
    }
    return stars;
  }
}
Rating.propTypes = {
  activeStar: string,
  onStarClick: func.isRequired
};
export default Rating;
