import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MovieCard from './movie-card';

Enzyme.configure({adapter: new Adapter()});

describe(`<MovieCard />`, () => {
  const handleClick = jest.fn();

  const movie = {
    movieTitle: `test`,
    movieImageSrc: `test.png`
  };

  it(`simulate click on title and play button in movie card`, () => {
    const container = shallow(<MovieCard
      movie={movie}
      onTitleClick={handleClick}
      onHover={handleClick}/>
    );

    const movieTitle = container.find(`.small-movie-card__title`);
    const moviePlayButton = container.find(`button`);

    movieTitle.simulate(`click`);
    moviePlayButton.simulate(`click`);

    expect(handleClick).toHaveBeenCalledTimes(2);
  });

  it(`movie card handle item`, () => {
    const container = shallow(<MovieCard
      movie={movie}
      onTitleClick={handleClick}
      onHover={handleClick}
    />);

    const moviePlayButton = container.find(`button`);
    moviePlayButton.simulate(`click`);

    expect(handleClick).toHaveBeenCalledWith(movie.movieTitle);
  });
});
