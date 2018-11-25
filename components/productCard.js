/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
import CartContext from '../cartContext';

const BuyButton = ({ title, price }) => (
  <CartContext.Consumer>
    {({ counter }) => (
          <button onClick={() => counter(title, price)}>Add</button>
    )}
  </CartContext.Consumer>
);

const TextBox = ({ title }) => (
    <span>{title}</span>
);

const Price = ({ price }) => (
  <span>{`Price: $ ${price}`}</span>
);
Price.propTypes = {
  price: PropTypes.number.isRequired,
};

const Image = ({
  src, alt, width = '150', height = '150',
}) => (
  <img src={src} alt={alt} width={width} height={height} />
);

const ProductCard = ({ title, price, imageUrl }) => (
    <div>
      <div><TextBox title={title}/></div>
      <div><Price price={price}/></div>
      <Image src={imageUrl} alt={title} />
      <div><BuyButton title={title} price={price}/></div>
    </div>
);

export default ProductCard;
