import React, { Component } from 'react';
import ReactDom from 'react-dom';
import products from './constants/products';
import ProductCard from './components/productCard';

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
            this.state.productsList.map((prod) => (
              <li key={prod.id}><ProductCard prod={prod} /></li>
            ))
          }
        </ul>
      </div>
    );
  }
}

ReactDom.render(
  <Catalog />,
  document.getElementById('root')
)
