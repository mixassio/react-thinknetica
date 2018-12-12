/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
import CartContext from '../../cartContext';

const BuyButton = ({ id, title, price, imageUrl }) => (
  <CartContext.Consumer>
    {({ counter }) => (
          <button onClick={() => counter(id, title, price, imageUrl)}>Add</button>
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

const ProductCard = ({ id, title, price, imageUrl }) => {
  // const { title, price, imageUrl } = product;
  return (
    <div>
      <div><TextBox title={title}/></div>
      <div><Price price={price}/></div>
      <Image src={imageUrl} alt={title} />
      <div><BuyButton id={id} title={title} price={price} imageUrl={imageUrl}/></div>
    </div>
  );
};

export default ProductCard;
