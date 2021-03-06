/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './productCard';

const Catalog = ({ products }) => (
  <div>
    {
      products.map(product => (
        <ProductCard key={product.id} {...product} />
      ))
    }
  </div>
);

Catalog.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape(ProductCard.propTypes),
  ),
};
export default Catalog;
