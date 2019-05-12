import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MovieCard from './movie-card';

Enzyme.configure({adapter: new Adapter()});

describe(`<MovieCard />`, () => {
  const handleClick = jest.fn();

  it(`simulate click on movie card`, () => {
    const container = shallow(<MovieCard
      movie={`Fantastic Beasts`}
      onTitleClick={handleClick}/>
    );

    const movieTitle = container.find(`.small-movie-card__title`);
    movieTitle.simulate(`click`);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
