// React Component for square-grid inside the board
import React from 'react';

const Square = ({ value }) => {
  // using object destructuring to get the "value" attribute from the props object (containing properties) passed to the Square Component.
  console.log(value);
  return <button type="button">{value}</button>;
};

export default Square;
