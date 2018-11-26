/* eslint-disable linebreak-style */
import { createContext } from 'react';

const CartContext = createContext({
  countPurchases: 0,
  counter: () => {},
});

export default CartContext;
