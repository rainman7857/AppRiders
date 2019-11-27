
import React from 'react';
import PropTypes from 'prop-types';

const Payment = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="20"
      viewBox="0 0 30 20"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...otherProps}
    >
      <g  fill="none" fill-rule="evenodd"><path d="M14.308 13.49A3.807 3.807 0 0 1 12.4 14c-2.154 0-3.9-1.79-3.9-4s1.746-4 3.9-4c.693 0 1.344.185 1.908.51A4.936 4.936 0 0 0 12.88 10c0 1.367.547 2.602 1.428 3.49zM0 2.993A3 3 0 0 1 3 0h24c1.657 0 3 1.343 3 2.994v14.012A3 3 0 0 1 27 20H3c-1.657 0-3-1.343-3-2.994V2.994zM17.6 14c2.154 0 3.9-1.79 3.9-4s-1.746-4-3.9-4-3.9 1.79-3.9 4 1.746 4 3.9 4z" fill="#1D2C36"></path></g>
    </svg>
  );
};

Payment.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Payment.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Payment;
