import React from 'react';
import PropTypes from 'prop-types';
export default function LiniSunSmall({
  size,
  ...props
}) {
  let className = 'Component Lini LiniSunSmall';

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
    d: "M9.5 6a.5.5 0 01-.5-.5v-2a.5.5 0 011 0v2a.5.5 0 01-.5.5zM4.5 11h-2a.5.5 0 010-1h2a.5.5 0 010 1zM16.5 11h-2a.5.5 0 010-1h2a.5.5 0 010 1zM9.5 18a.5.5 0 01-.5-.5v-2a.5.5 0 011 0v2a.5.5 0 01-.5.5zM9.5 8c1.378 0 2.5 1.122 2.5 2.5S10.878 13 9.5 13 7 11.878 7 10.5 8.122 8 9.5 8zm0-1a3.5 3.5 0 100 7 3.5 3.5 0 000-7zM12.786 7.214a.5.5 0 01-.354-.853l1.414-1.414a.5.5 0 01.707.707l-1.414 1.414a.498.498 0 01-.354.146zM6.214 7.214a.502.502 0 01-.354-.146L4.446 5.654a.5.5 0 01.707-.707l1.414 1.414a.5.5 0 01-.354.853zM14.2 16.2a.502.502 0 01-.354-.146l-1.414-1.414a.5.5 0 01.707-.707l1.414 1.414a.5.5 0 01-.354.853zM4.8 16.2a.5.5 0 01-.354-.853l1.414-1.414a.5.5 0 01.707.707l-1.414 1.414a.498.498 0 01-.354.146z"
  })));
}
LiniSunSmall.propTypes = {
  size: PropTypes.number.isRequired
};