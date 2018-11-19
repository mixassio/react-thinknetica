import React from 'react';

const TextBox = ({ title }) => (
    <span>{title}</span>
  );
  const Price = ({ price }) => (
    <span>{`Price: ${price}`}</span>
  );
  const Image = ({ src, alt, width="150", height="150" }) => (
    <img src={src} alt={alt} widht={width} height={height} />
  );
  
  const ProductCard = ({ prod }) => {
    return (
      <div>
        <div><TextBox title={prod.title}/></div>
        <div><Price price={prod.price}/></div>
        <Image src={prod.imageUrl} alt={prod.title} />
      </div>
    );
  };

  export default ProductCard;
  