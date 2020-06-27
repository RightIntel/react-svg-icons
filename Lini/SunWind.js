function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniSunWind({
  size,
  ...props
}) {
  let className = 'Component Lini LiniSunWind';

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
    d: "M14.5 12H8c-1.103 0-2-.897-2-2s.897-2 2-2c.946 0 1.77.671 1.959 1.596a.5.5 0 00.98-.2A3.01 3.01 0 008 7c-1.654 0-3 1.346-3 3 0 .768.29 1.469.766 2H2c-.551 0-1-.449-1-1s.449-1 1-1c.423 0 .802.268.943.667a.5.5 0 00.943-.333A2.004 2.004 0 002 9.001c-1.103 0-2 .897-2 2s.897 2 2 2h12.5a.5.5 0 000-1zM4 18c-1.103 0-2-.897-2-2s.897-2 2-2h8.5a.5.5 0 010 1H4c-.551 0-1 .449-1 1s.449 1 1 1c.423 0 .802-.268.943-.667a.5.5 0 01.943.333A2.004 2.004 0 014 17.999z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.5 17h-6a.5.5 0 010-1h6a.5.5 0 010 1zM15.964 11a.499.499 0 01-.432-.75A3.504 3.504 0 0012.5 5c-.853 0-1.676.311-2.315.875a.5.5 0 11-.662-.75A4.497 4.497 0 0112.499 4c2.481 0 4.5 2.019 4.5 4.5 0 .791-.208 1.569-.602 2.25a.501.501 0 01-.433.25zM12.5 3a.5.5 0 01-.5-.5v-1a.5.5 0 011 0v1a.5.5 0 01-.5.5zM7.5 4a.502.502 0 01-.354-.146l-1-1a.5.5 0 01.707-.707l1 1A.5.5 0 017.499 4zM17.5 4a.5.5 0 01-.354-.853l1-1a.5.5 0 01.707.707l-1 1a.498.498 0 01-.354.146zM19.5 9h-1a.5.5 0 010-1h1a.5.5 0 010 1zM18.5 14a.502.502 0 01-.354-.146l-1-1a.5.5 0 01.707-.707l1 1a.5.5 0 01-.354.853z"
  })));
}
LiniSunWind.propTypes = {
  size: PropTypes.number.isRequired
};