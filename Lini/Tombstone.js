import React from 'react';
import PropTypes from 'prop-types';
export default function LiniTombstone({
  size,
  ...props
}) {
  let className = 'Component Lini LiniTombstone';

  if (props.className) {
    className += ' ' + props.className;
  }

  return /*#__PURE__*/React.createElement("span", Object.assign({}, props, {
    className: className
  }), /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M7 8V7c0-.551-.449-1-1-1H5c-.551 0-1 .449-1 1v3.5a.5.5 0 001 0V9h.191l.862 1.724a.501.501 0 00.895-.447l-.659-1.319A1 1 0 007.001 8zM5 7h1v1H5V7zM8.5 11a.5.5 0 01-.5-.5v-4a.5.5 0 011 0v4a.5.5 0 01-.5.5zM10.5 11a.5.5 0 01-.5-.5V7c0-.551.449-1 1-1h1c.551 0 1 .449 1 1v1c0 .551-.449 1-1 1h-1v1.5a.5.5 0 01-.5.5zm.5-3h1V7h-1v1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.51 2.49A8.446 8.446 0 0011.5 0h-3C6.23 0 4.095.884 2.49 2.49S0 6.23 0 8.5v10c0 .827.673 1.5 1.5 1.5h17c.827 0 1.5-.673 1.5-1.5v-10c0-2.27-.884-4.405-2.49-6.01zM1 18.5v-10C1 4.364 4.364 1 8.5 1S16 4.364 16 8.5v10a.5.5 0 01-.5.5h-14a.5.5 0 01-.5-.5zm18 0a.5.5 0 01-.5.5h-1.586c.056-.157.086-.325.086-.5v-10c0-2.27-.884-4.405-2.49-6.01a8.538 8.538 0 00-1.834-1.397C16.255 1.659 19 4.765 19 8.5v10z"
  })));
}
LiniTombstone.propTypes = {
  size: PropTypes.number.isRequired
};