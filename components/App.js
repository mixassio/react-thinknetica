/* eslint-disable linebreak-style */
import React from 'react';
import Catalog from './Catalog';
import Cart from './Cart';
import Segment from './Segment';
import getProducts from '../constants/products';
import CartContext from '../cartContext';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.addToBasket = (title, price) => {
      this.setState(state => ({
        countPurchases: state.countPurchases + 1,
        purchases: state.purchases.concat([{ title, price }]),
      }));
    };

    this.state = {
      countPurchases: 0,
      counter: this.addToBasket,
      products: getProducts(),
      purchases: [],
    };
  }

  render() {
    return (
      <CartContext.Provider value={this.state}>
        <Segment dashed>
          <Catalog products={ this.state.products } />
          <Cart value={this.state.countPurchases} />
        </Segment>
      </CartContext.Provider>
    );
  }
}

export default App;
