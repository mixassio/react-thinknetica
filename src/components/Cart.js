/* eslint-disable linebreak-style */
import React from 'react';
import { uniqueId } from 'lodash';
import ProductCard from './productCard';

const Cart = ({purchases}) => {
  console.log(purchases);
  return (
      <div>
        {
          purchases.map(product => (
              <ProductCard key={uniqueId()} {...product} />
          ))
        }
      </div>
  );
}

export default Cart;
