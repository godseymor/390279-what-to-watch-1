import React from 'react';

const withActiveItem = (Component) => {
  class WithActiveItem extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeItem: null
      };

      this.changeActiveItem = this.changeActiveItem.bind(this);
    }

    changeActiveItem(item) {
      this.setState({
        activeItem: item
      });
    }

    render() {
      const {activeItem} = this.state;

      return (
        <Component
          activeItem={activeItem}
          onChange={this.changeActiveItem}
          {...this.props}
        />);
    }
  }

  return WithActiveItem;
};

export default withActiveItem;
