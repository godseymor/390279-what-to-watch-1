import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MovieCard from './movie-card';

Enzyme.configure({adapter: new Adapter()});

describe(`<MovieCard />`, () => {
  const handleClick = jest.fn();

  it(`simulate click on movie card`, () => {
    const container = shallow(<MovieCard
      movies={[
        `Fantastic Beasts`,
        `Bohemian Rhapsody`,
        `Macbeth`,
        `Aviator`
      ]}
      onTitleClick={handleClick}/>
    );

    const movieTitle = container.find(`.small-movie-card__title`);
    movieTitle.forEach((title) => title.simulate(`click`));

    expect(handleClick).toHaveBeenCalledTimes(movieTitle.length);
  });
});
