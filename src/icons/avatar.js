import React from 'react';
import PropTypes from 'prop-types';

const Avatar = props => {
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
      <g fill="none" fill-rule="evenodd"><circle fill="#ECEDEF" cx="16" cy="16" r="16"></circle><path d="M12.886 10.824A3.222 3.222 0 0 1 16.1 7.6a3.22 3.22 0 0 1 3.214 3.224v1.052A3.222 3.222 0 0 1 16.1 15.1a3.22 3.22 0 0 1-3.214-3.224v-1.052zm3.214 6.419c5.357 0 7.5 2.143 7.5 2.143V22.6h-15v-3.214s2.143-2.143 7.5-2.143z" fill="#C6CAD1"></path></g>
    </svg>
  );
};

Avatar.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Avatar.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Avatar;
