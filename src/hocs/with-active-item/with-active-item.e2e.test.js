import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import withActiveItem from './with-active-item.jsx';

configure({adapter: new Adapter()});

const Mock = () => <div />;
const MockWrapper = withActiveItem(Mock);

it(`HOC correctly change activeItem`, () => {
  const wrap = shallow(<MockWrapper/>);

  wrap.instance().changeActiveItem(`active-item`);
  expect(wrap.state().activeItem).toEqual(`active-item`);
});
