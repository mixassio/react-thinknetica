/* eslint-disable linebreak-style */
import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import Catalog from './components/Catalog';
import Cart from './components/Cart';
import CartButton from './components/CartButton';
import ProductCard from './components/productCard';
import getProducts from '../constants/products';
import CartContext from '../cartContext';
import {
  catalogPath, contactsPath, cartPath, productPath,
} from './helpers/paths';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.addToBasket = (id, title, price, imageUrl) => {
      this.setState(state => ({
        countPurchases: state.countPurchases + 1,
        purchases: state.purchases.concat([{ id, title, price, imageUrl }]),
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
    const { products, countPurchases, purchases } = this.state;
    console.log(products)
    console.log(purchases)
    return (
          <CartContext.Provider value={this.state}>
            <div>
              <ul>
                <li><NavLink exact to={catalogPath()}>Main</NavLink></li>
                <li><NavLink to={contactsPath()}>contacts</NavLink></li>
                <li><NavLink to={cartPath()}>Cart</NavLink></li>
              </ul>
              <Switch>
                <Route path={catalogPath()} exact render={() => (
                    <div>
                      <Catalog products={ products } />
                      <CartButton value={ countPurchases } />
                    </div>
                )} />
                <Route path={contactsPath()} render={() => (<div>contacts!</div>)}/>
                <Route path={productPath()} render={({ match }) => {
                  const product = products[match.params.id];
                  return (
                  <ProductCard {...product}/>
                  );
                }}/>
                <Route path={cartPath()} render={() => <Cart purchases={ purchases } />}/>
                <Route render={({ staticContext }) => {
                  if (staticContext) {
                    staticContext.status = 404;
                  }
                  return <div>404: Not found</div>;
                }} />
              </Switch>
            </div>
          </CartContext.Provider>
    );
  }
}

export default App;
