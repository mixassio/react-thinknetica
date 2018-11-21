import React, { Children } from 'react';
import ReactDom from 'react-dom';
import bowser from 'bowser';
import Catalog from './components/Catalog';
import getProducts from './constants/products';
import browserContext from './browserContext';
/* eslint linebreak-style: ["error", "windows"] */


const getBrowser = () => bowser.getParser(window.navigator.userAgent);
const Segment = ({ children, dashed, color }) => (
  <div
    style={{
      border: `1px ${dashed ? 'dashed' : 'solid'} ${color}`,
    }}
    >
      {Children.map(
        children,
        (child, key) => (
          <div key={key} style={{ border: '1px solid red' }}>
            {child}
          </div>
        ),
      )}
  </div>
);
Segment.defaultProps = {
  color: 'black',
};

const products = getProducts();


ReactDom.render(
  <browserContext.Provider value={getBrowser()}>
    <Segment dashed>
      <Catalog products={ products } />
      <div>
        Second
      </div>
      {() => <div>Third</div>}
  </Segment>
  </browserContext.Provider>,
  document.getElementById('root'),
);
