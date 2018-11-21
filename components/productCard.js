import React from 'react';
import PropTypes from 'prop-types';

/* eslint linebreak-style: ["error", "windows"] */

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
  <img src={src} alt={alt} widht={width} height={height} />
);


const ProductCard = ({ prod }) => (
    <div>
      <div><TextBox title={prod.title}/></div>
      <div><Price price={prod.price}/></div>
      <Image src={prod.imageUrl} alt={prod.title} />
    </div>
);


export default ProductCard;
