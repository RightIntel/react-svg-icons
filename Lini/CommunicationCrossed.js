function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniCommunicationCrossed({
  size,
  ...props
}) {
  let className = 'Component Lini LiniCommunicationCrossed';

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
    d: "M1.5 11C.673 11 0 10.327 0 9.5S.673 8 1.5 8 3 8.673 3 9.5 2.327 11 1.5 11zm0-2a.5.5 0 100 1 .5.5 0 000-1zM18.5 11c-.827 0-1.5-.673-1.5-1.5S17.673 8 18.5 8s1.5.673 1.5 1.5-.673 1.5-1.5 1.5zm0-2a.5.5 0 100 1 .5.5 0 000-1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.931 4.247a.5.5 0 00-.684-.177L12.29 7.574a6.47 6.47 0 011.615-2.67.5.5 0 00-.707-.707 7.44 7.44 0 00-2.097 4.076l-2.1 1.235V9.5c0-2.003-.78-3.887-2.197-5.303a.5.5 0 00-.707.707 6.457 6.457 0 011.875 5.209L5.5 11.567a4.482 4.482 0 00.501-2.068 4.47 4.47 0 00-1.318-3.182.5.5 0 00-.707.707c.661.661 1.025 1.54 1.025 2.475s-.364 1.814-1.025 2.475a.499.499 0 00-.105.551l-2.623 1.543a.5.5 0 10.507.862l5.957-3.504a6.47 6.47 0 01-1.615 2.67.5.5 0 00.708.707 7.447 7.447 0 002.097-4.076l2.1-1.235V9.5c0 2.003.78 3.887 2.197 5.303a.498.498 0 00.708 0 .5.5 0 000-.707 6.457 6.457 0 01-1.875-5.209l2.472-1.454a4.482 4.482 0 00-.501 2.068 4.47 4.47 0 001.318 3.182.498.498 0 00.708 0 .5.5 0 000-.707c-.661-.661-1.025-1.54-1.025-2.475s.364-1.814 1.025-2.475a.499.499 0 00.105-.551l2.623-1.543a.5.5 0 00.177-.684z"
  })));
}
LiniCommunicationCrossed.propTypes = {
  size: PropTypes.number.isRequired
};