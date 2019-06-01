import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MovieCard from './movie-card';

Enzyme.configure({adapter: new Adapter()});

describe(`<MovieCard />`, () => {
  const handleClick = jest.fn();

  const movie = {
    movieId: `1`,
    movieTitle: `test`,
    movieImageSrc: `test.png`,
    moviePreview: `video.mp4`
  };

  it(`simulate click on title in movie card`, () => {
    const container = shallow(<MovieCard
      movie={movie}
      onTitleClick={handleClick}
    />
    );

    const movieTitle = container.find(`.small-movie-card__title`);

    movieTitle.simulate(`click`);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it(`Movie card handle mouse correclty`, () => {
    const container = shallow(<MovieCard
      movie={movie}
      onTitleClick={handleClick}
      onMouseEnter={handleClick}
      onChange={handleClick}
    />);

    container.simulate(`mouseEnter`, handleClick);
    expect(handleClick).toHaveBeenCalledTimes(2);
  });
});
