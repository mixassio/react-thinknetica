import React from 'react';
import Catalog from './Catalog';
import Busket from './Busket';
import Segment from './Segment';
import getProducts from '../constants/products';
import BasketContext from '../basketContext';
/* eslint linebreak-style: ["error", "windows"] */

class App extends React.Component {
  constructor(props) {
    super(props);

    this.counter = (title, price) => {
      this.setState(state => ({
        countPurchases: state.countPurchases + 1,
        purchases: state.purchases.concat([{ title, price }]),
      }));
    };

    this.state = {
      countPurchases: 0,
      counter: this.counter,
      products: getProducts(),
      purchases: [],
    };
  }

  render() {
    return (
      <BasketContext.Provider value={this.state}>
        <Segment dashed>
          <Catalog products={ this.state.products } />
          <Busket value={this.state.countPurchases} />
        </Segment>
      </BasketContext.Provider>
    );
  }
}

export default App;
