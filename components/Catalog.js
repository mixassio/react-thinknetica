import React, { Component } from 'react';
import products from '../constants/products';
import ProductCard from './productCard';

/* eslint linebreak-style: ["error", "windows"] */

class Catalog extends Component {
  constructor(props) {
    super(props);
    this.state = { productsList: [] };
  }

  componentDidMount() {
    this.setState({ productsList: products() });
  }

  render() {
    return (
        <div>
          <ul>
            {
              this.state.productsList.map(prod => (
                <li key={prod.id}><ProductCard prod={prod} /></li>
              ))
            }
          </ul>
        </div>
    );
  }
}
export default Catalog;
