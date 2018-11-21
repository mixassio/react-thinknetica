import React from 'react';
import PropTypes from 'prop-types';
import browserContext from '../browserContext';

/* eslint linebreak-style: ["error", "windows"] */
const BuyButton = () => (
  <browserContext.Consumer>
    {
      browser => (
        browser.getPlatform().type === 'desktop' ? (
          <button>Desktop Buy</button>
        ) : (
          <button>Mobile Buy</button>
        )
      )
    }
  </browserContext.Consumer>
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
  <img src={src} alt={alt} widht={width} height={height} />
);


const ProductCard = ({ title, price, imageUrl }) => (
    <div>
      <div><TextBox title={title}/></div>
      <div><Price price={price}/></div>
      <Image src={imageUrl} alt={title} />
      <div><BuyButton /></div>
    </div>
);


export default ProductCard;
