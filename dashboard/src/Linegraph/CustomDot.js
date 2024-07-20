
import React from 'react';

const CustomDot = (props) => {
  const { cx, cy } = props;
  return (
    <circle cx={cx} cy={cy} r={6} stroke="none" fill="blue" />
  );
};

export default CustomDot;
