function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniSun({
  size,
  ...props
}) {
  let className = 'Component Lini LiniSun';

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
    d: "M9.5 5a.5.5 0 01-.5-.5v-3a.5.5 0 011 0v3a.5.5 0 01-.5.5zM3.5 11h-3a.5.5 0 010-1h3a.5.5 0 010 1zM18.5 11h-3a.5.5 0 010-1h3a.5.5 0 010 1zM9.5 20a.5.5 0 01-.5-.5v-3a.5.5 0 011 0v3a.5.5 0 01-.5.5zM9.5 7.007c.935 0 1.814.363 2.475 1.024S13 9.567 13 10.5s-.364 1.809-1.025 2.469c-.661.66-1.54 1.024-2.475 1.024s-1.814-.363-2.475-1.024C6.364 12.309 6 11.433 6 10.5s.364-1.809 1.025-2.469A3.48 3.48 0 019.5 7.007zm0-1C7.015 6.007 5 8.018 5 10.5s2.015 4.493 4.5 4.493S14 12.982 14 10.5a4.497 4.497 0 00-4.5-4.493zM5.507 6.507a.502.502 0 01-.354-.146L3.032 4.24a.5.5 0 01.707-.707L5.86 5.654a.5.5 0 01-.354.853zM3.386 17.614a.5.5 0 01-.354-.853l2.121-2.121a.5.5 0 01.707.707l-2.121 2.121a.498.498 0 01-.354.146zM13.493 6.507a.5.5 0 01-.354-.853l2.121-2.121a.5.5 0 01.707.707l-2.121 2.121a.498.498 0 01-.354.146zM15.614 17.614a.502.502 0 01-.354-.146l-2.121-2.121a.5.5 0 01.707-.707l2.121 2.121a.5.5 0 01-.354.853z"
  })));
}
LiniSun.propTypes = {
  size: PropTypes.number.isRequired
};