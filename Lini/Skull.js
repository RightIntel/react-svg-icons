function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniSkull({
  size,
  ...props
}) {
  let className = 'Component Lini LiniSkull';

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
    d: "M14.5 20a.5.5 0 01-.5-.5v-3c0-1.324.809-2.63 1.842-2.974C16.459 13.32 17 12.374 17 11.5v-2C17 5.364 13.636 2 9.5 2S2 5.364 2 9.5v2c0 .873.541 1.82 1.158 2.026C4.191 13.87 5 15.177 5 16.5v3a.5.5 0 01-1 0v-3c0-.873-.541-1.82-1.158-2.026C1.809 14.13 1 12.823 1 11.5v-2c0-2.27.884-4.405 2.49-6.01S7.23 1 9.5 1c2.27 0 4.405.884 6.01 2.49S18 7.23 18 9.5v2c0 1.324-.809 2.63-1.842 2.974C15.541 14.68 15 15.626 15 16.5v3a.5.5 0 01-.5.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.5 20a.5.5 0 01-.5-.5v-2a.5.5 0 011 0v2a.5.5 0 01-.5.5zM8.5 20a.5.5 0 01-.5-.5v-2a.5.5 0 011 0v2a.5.5 0 01-.5.5zM10.5 20a.5.5 0 01-.5-.5v-2a.5.5 0 011 0v2a.5.5 0 01-.5.5zM12.5 20a.5.5 0 01-.5-.5v-2a.5.5 0 011 0v2a.5.5 0 01-.5.5zM12.5 13c-1.378 0-2.5-1.122-2.5-2.5S11.122 8 12.5 8 15 9.122 15 10.5 13.878 13 12.5 13zm0-4c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5S13.327 9 12.5 9zM6.5 13C5.122 13 4 11.878 4 10.5S5.122 8 6.5 8 9 9.122 9 10.5 7.878 13 6.5 13zm0-4C5.673 9 5 9.673 5 10.5S5.673 12 6.5 12 8 11.327 8 10.5 7.327 9 6.5 9zM10.438 15.786c-.108 0-.224-.021-.346-.061-.148-.049-.363-.077-.592-.077s-.444.028-.592.077a1.09 1.09 0 01-.346.061.68.68 0 01-.614-.341c-.11-.195-.176-.536.138-1.059l.471-.785c.227-.379.571-.596.943-.596s.716.217.943.596l.471.785c.314.523.248.865.138 1.059a.682.682 0 01-.614.341zM9.5 14.647c.144 0 .285.008.42.024l-.334-.557a.357.357 0 00-.086-.104.357.357 0 00-.086.104l-.334.557c.134-.016.276-.024.42-.024z"
  })));
}
LiniSkull.propTypes = {
  size: PropTypes.number.isRequired
};