import React from 'react';
import PropTypes from 'prop-types';

const Products = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...otherProps}
    >
		<path class="no-stroke" d="M19 11h-7c-.553 0-1 .447-1 1v7c0 .553.447 1 1 1h7c.553 0 1-.447 1-1v-7c0-.553-.447-1-1-1zM8 11c.553 0 1 .447 1 1v7c0 .553-.447 1-1 1H1c-.553 0-1-.447-1-1v-7c0-.553.447-1 1-1h7zM8 0c.553 0 1 .447 1 1v7c0 .553-.447 1-1 1H1c-.553 0-1-.447-1-1V1c0-.553.447-1 1-1h7zM2 18h5v-5H2v5zM2 7h5V2H2v5zm11 11v-5h5v5h-5zM12 6c-.553 0-1-.447-1-1s.447-1 1-1h2V2c0-.553.447-1 1-1s1 .447 1 1v2h2c.553 0 1 .447 1 1s-.447 1-1 1h-2v2c0 .553-.447 1-1 1s-1-.447-1-1V6h-2z"/>
  </svg>
  );
};

Products.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Products.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Products;
