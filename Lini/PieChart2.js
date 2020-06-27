function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniPieChart2({
  size,
  ...props
}) {
  let className = 'Component Lini LiniPieChart2';

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
    d: "M8.5 20c-2.27 0-4.405-.884-6.01-2.49S0 13.77 0 11.5c0-2.27.884-4.405 2.49-6.01S6.23 3 8.5 3a.5.5 0 010 1C4.364 4 1 7.364 1 11.5S4.364 19 8.5 19s7.5-3.364 7.5-7.5a.5.5 0 011 0c0 2.27-.884 4.405-2.49 6.01S10.77 20 8.5 20z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.5 10h-8a.5.5 0 01-.5-.5v-8a.5.5 0 01.5-.5c2.27 0 4.405.884 6.01 2.49S19 7.23 19 9.5a.5.5 0 01-.5.5zM11 9h6.984A7.513 7.513 0 0011 2.016V9z"
  })));
}
LiniPieChart2.propTypes = {
  size: PropTypes.number.isRequired
};