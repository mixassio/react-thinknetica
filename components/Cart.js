/* eslint-disable linebreak-style */
import React, { Component } from 'react';
import CartContext from '../cartContext';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = { value: props.value };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      value: prevState.value + 1,
    }));
  }

  render() {
    return (
        <CartContext.Consumer>
            {({ countPurchases }) => (
                <button onClick={() => this.handleClick()}>Buy: {countPurchases}</button>
            )}
        </CartContext.Consumer>
    );
  }
}
Cart.defaultProps = {
  value: 0,
};
export default Cart;
