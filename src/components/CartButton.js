/* eslint-disable linebreak-style */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import CartContext from '../../cartContext';

class CartButton extends Component {
  constructor(props) {
    super(props);
    this.state = { value: props.value };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      value: prevState.value + 1,
    }));
    return <Link to='/cart'/>;
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
CartButton.defaultProps = {
  value: 0,
};
export default CartButton;
