import React from 'react';

const Arrow = ({carouselState, children,...restArrowProps}) => (
  <span {...restArrowProps}>
    {children}
  </span>
);

export default Arrow;