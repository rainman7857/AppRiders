

import React from 'react';
import PropTypes from 'prop-types';

const Meter = props => {
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
		<path d="M72.8,24.9L53.4,66.7c-1.7,4.3-4.7,6.8-8,6.8c-2.7,0-5-1.4-6.3-3.6c-1.4-2.6-1.3-5.8,0.4-8.5v0l25.4-40.7
	c1.3-2,3.9-2.7,6-1.6C73,20.2,73.8,22.7,72.8,24.9z M79.6,37c-1.5-1.6-4-1.7-5.7-0.2c-1.6,1.5-1.7,4-0.2,5.7
	C80.3,49.7,84,59.1,84,69c0,2.2,1.8,4,4,4s4-1.8,4-4C92,57.1,87.6,45.7,79.6,37z M49.2,30.4c2.2,0.2,4.1-1.4,4.3-3.6
	c0.2-2.2-1.4-4.1-3.6-4.3c-1.3-0.1-2.6-0.2-3.9-0.2c-25.4,0-46,21-46,46.8c0,2.2,1.8,4,4,4s4-1.8,4-4c0-21.4,17-38.8,38-38.8
	C47.1,30.2,48.2,30.3,49.2,30.4z"/>
		</svg>
  );
};

Meter.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Meter.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Meter;
