import { createContext } from 'react';
/* eslint linebreak-style: ["error", "windows"] */

const BasketContext = createContext({
  countPurchases: 0,
  counter: () => {},
});

export default BasketContext;
