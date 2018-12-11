/* eslint-disable linebreak-style */
import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import Catalog from './Catalog';
import Cart from './Cart';
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
    const { products, countPurchases } = this.state;
    return (
      <CartContext.Provider value={ this.state }>
        <ul>
          <li><NavLink exact to='/'>Main</NavLink></li>
          <li><NavLink to='/about'>About</NavLink></li>
          <li><NavLink to='/products'>Catalog</NavLink></li>
        </ul>
        <Switch>
          <Route path='/' exact render={() => (<div>
            <Catalog products={ products } />
            <Cart value={ countPurchases } />
          </div>)} />
          <Route path='/about' render={() => <div>About</div>} />
        </Switch>
      </CartContext.Provider>
    );
  }
}

export default App;
