function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniCable2({
  size,
  ...props
}) {
  let className = 'Component Lini LiniCable2';

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
    d: "M6.5 14h-3a.5.5 0 01-.5-.5v-1.55c1.14-.232 2-1.242 2-2.45v-7a.5.5 0 00-.5-.5H3V.5a.5.5 0 00-1 0V2H.5a.5.5 0 00-.5.5v7c0 1.207.86 2.217 2 2.45v1.55c0 .827.673 1.5 1.5 1.5h3a.5.5 0 01.5.5v4a.5.5 0 001 0v-4c0-.827-.673-1.5-1.5-1.5zM4 3v1H1V3h3zM1 9.5V5h3v4.5c0 .827-.673 1.5-1.5 1.5S1 10.327 1 9.5zM11.5 2H10V.5a.5.5 0 00-1 0V2H7.5a.5.5 0 00-.5.5v7c0 1.207.86 2.217 2 2.45v7.55a.5.5 0 001 0v-7.55c1.14-.232 2-1.242 2-2.45v-7a.5.5 0 00-.5-.5zM11 3v1H8V3h3zm0 6.5c0 .827-.673 1.5-1.5 1.5S8 10.327 8 9.5V5h3v4.5zM18.5 2H17V.5a.5.5 0 00-1 0V2h-1.5a.5.5 0 00-.5.5v7c0 1.207.86 2.217 2 2.45v1.55a.5.5 0 01-.5.5h-3c-.827 0-1.5.673-1.5 1.5v4a.5.5 0 001 0v-4a.5.5 0 01.5-.5h3c.827 0 1.5-.673 1.5-1.5v-1.55c1.14-.232 2-1.242 2-2.45v-7a.5.5 0 00-.5-.5zM18 3v1h-3V3h3zm0 6.5c0 .827-.673 1.5-1.5 1.5S15 10.327 15 9.5V5h3v4.5z"
  })));
}
LiniCable2.propTypes = {
  size: PropTypes.number.isRequired
};