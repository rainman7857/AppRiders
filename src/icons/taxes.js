import React from 'react';
import PropTypes from 'prop-types';

const Taxes = props => {
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
		<path class="no-stroke" d="M17 0H3c-.553 0-1 .447-1 1v18c0 .37.203.708.528.882s.72.154 1.027-.05l2.318-1.545 1.42 1.42c.39.39 1.023.39 1.414 0L10 18.414l1.293 1.293c.195.196.45.293.707.293s.512-.097.707-.293l1.42-1.42 2.318 1.545c.307.204.702.224 1.027.05S18 19.37 18 19V1c0-.553-.447-1-1-1zm-1 17.132l-1.445-.964c-.395-.265-.924-.213-1.262.125L12 17.586l-1.293-1.293c-.195-.195-.45-.293-.707-.293s-.512.098-.707.293L8 17.586l-1.293-1.293c-.338-.338-.867-.39-1.262-.125L4 17.132V2h12v15.132zm-9-4.094c.256 0 .512-.098.707-.293l6-6c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0l-6 6c-.39.392-.39 1.024 0 1.415.195.195.45.293.707.293zm.5-5c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5S6 5.71 6 6.538s.672 1.5 1.5 1.5zm5 2c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5z"/>
  </svg>
  );
};

Taxes.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Taxes.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Taxes;
