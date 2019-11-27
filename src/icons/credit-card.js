import React from 'react';
import PropTypes from 'prop-types';

const CreditCard = props => {
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
     <path class="no-stroke" d="M2 16v-6h16v6H2zM2 6V4h16v2H2zM1 2c-.553 0-1 .448-1 1v14c0 .552.447 1 1 1h18c.553 0 1-.448 1-1V3c0-.552-.447-1-1-1H1zm4 10c-.553 0-1 .448-1 1s.447 1 1 1h3c.553 0 1-.448 1-1s-.447-1-1-1H5z"/>
    </svg>
  );
};

CreditCard.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CreditCard.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default CreditCard;
