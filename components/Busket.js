import React, { Component } from 'react';
import BasketContext from '../basketContext';
/* eslint linebreak-style: ["error", "windows"] */

class Busket extends Component {
  constructor(props) {
    super(props);
    this.state = { value: props.value };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(purchases) {
    console.log(purchases);
    this.setState(prevState => ({
      value: prevState.value + 1,
    }));
  }

  render() {
    return (
        <BasketContext.Consumer>
            {({ countPurchases, purchases }) => (
                <button onClick={() => this.handleClick(purchases)}>Buy: {countPurchases}</button>
            )}
        </BasketContext.Consumer>
    );
  }
}
Busket.defaultProps = {
  value: 0,
};
export default Busket;
