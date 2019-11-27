import React from 'react';
import PropTypes from 'prop-types';

const Report = props => {
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
		<path class="no-stroke" d="M19 18c.552 0 1 .448 1 1s-.448 1-1 1H1c-.552 0-1-.448-1-1s.448-1 1-1h18zm0-18c.552 0 1 .448 1 1v14c0 .552-.448 1-1 1H1c-.552 0-1-.448-1-1V9c0-.552.448-1 1-1h5V5c0-.552.448-1 1-1h5V1c0-.552.448-1 1-1h6zm-5 14h4V2h-4v12zm-6 0h4V6H8v8zm-6 0h4v-4H2v4z"/>
	 </svg>
  );
};

Report.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Report.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Report;
