import React from 'react';
import PropTypes from 'prop-types';

const Home = props => {
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
      <path xmlns="http://www.w3.org/2000/svg" class="no-stroke" fill="#d9d9d9" d="M16 18h-2v-5c0-.552-.448-1-1-1H7c-.552 0-1 .448-1 1v5H4V7.67l6-5.332 6 5.333V18zM4 2h2v1.217L4 4.995V2zm15.665 6.252l-9-8c-.38-.336-.95-.336-1.33 0L8 1.44V1c0-.552-.448-1-1-1H3c-.552 0-1 .448-1 1v5.773L.335 8.253c-.412.367-.45.998-.083 1.412.368.413.998.45 1.413.083l.335-.3V19c0 .552.448 1 1 1h4c.552 0 1-.448 1-1v-5h4v5c0 .552.448 1 1 1h4c.552 0 1-.448 1-1V9.45l.335.298c.19.17.428.252.665.252.275 0 .55-.113.748-.335.366-.414.33-1.045-.083-1.413z"></path>
    </svg>
  );
};

Home.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Home.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Home;
