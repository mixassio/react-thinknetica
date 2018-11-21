import React, { Children } from 'react';
import ReactDom from 'react-dom';
import Catalog from './components/Catalog';

/* eslint linebreak-style: ["error", "windows"] */

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

ReactDom.render(
  <Segment dashed>
    <Catalog />
    <div>
      Second
    </div>
    {() => <div>Third</div>}
  </Segment>,
  document.getElementById('root'),
);
