function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniSlingshot({
  size,
  ...props
}) {
  let className = 'Component Lini LiniSlingshot';

  if (props.className) {
    className += ' ' + props.className;
  }

  return /*#__PURE__*/React.createElement("span", _extends({}, props, {
    className: className
  }), /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10.5 20h-1c-.827 0-1.5-.673-1.5-1.5V17a.5.5 0 011 0v1.5a.5.5 0 00.5.5h1a.5.5 0 00.5-.5V17a.5.5 0 011 0v1.5c0 .827-.673 1.5-1.5 1.5zM14.5 0h-1c-.827 0-1.5.673-1.5 1.5V4c0 1.103-.897 2-2 2s-2-.897-2-2V1.5C8 .673 7.327 0 6.5 0h-1C4.673 0 4 .673 4 1.5V4c0 1.333.428 2.595 1.238 3.65A6.054 6.054 0 008 9.658V13.5a.5.5 0 001 0V9.293a.5.5 0 00-.364-.481A5.018 5.018 0 015 4h2c0 1.654 1.346 3 3 3s3-1.346 3-3h2a5.018 5.018 0 01-3.636 4.812.5.5 0 00-.364.481V13.5a.5.5 0 001 0V9.658a6.041 6.041 0 002.762-2.008A5.943 5.943 0 0016 4V1.5c0-.827-.673-1.5-1.5-1.5zM5 3V1.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5V3H5zm8 0V1.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5V3h-2z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 16c-1.87 0-3.628-.728-4.95-2.05S3 10.87 3 9V3.5a.5.5 0 011 0V9c0 3.308 2.692 6 6 6s6-2.692 6-6V3.5a.5.5 0 011 0V9c0 1.87-.728 3.628-2.05 4.95S11.87 16 10 16z"
  })));
}
LiniSlingshot.propTypes = {
  size: PropTypes.number.isRequired
};