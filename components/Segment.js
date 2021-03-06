/* eslint-disable linebreak-style */
import React, { Children } from 'react';

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

export default Segment;
