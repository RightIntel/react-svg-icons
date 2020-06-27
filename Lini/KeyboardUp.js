function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniKeyboardUp({
  size,
  ...props
}) {
  let className = 'Component Lini LiniKeyboardUp';

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
    d: "M17.5 19h-16C.673 19 0 18.327 0 17.5v-8C0 8.673.673 8 1.5 8h6a.5.5 0 010 1h-6a.5.5 0 00-.5.5v8a.5.5 0 00.5.5h16a.5.5 0 00.5-.5v-8a.5.5 0 00-.5-.5h-6a.5.5 0 010-1h6c.827 0 1.5.673 1.5 1.5v8c0 .827-.673 1.5-1.5 1.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3.5 11h-1a.5.5 0 010-1h1a.5.5 0 010 1zM16.5 11h-1a.5.5 0 010-1h1a.5.5 0 010 1zM4.5 13h-2a.5.5 0 010-1h2a.5.5 0 010 1zM16.5 15h-3a.5.5 0 010-1H16v-1.5a.5.5 0 011 0v2a.5.5 0 01-.5.5zM5.5 15h-3a.5.5 0 010-1h3a.5.5 0 010 1zM3.5 17h-1a.5.5 0 010-1h1a.5.5 0 010 1zM11.5 17h-6a.5.5 0 010-1h6a.5.5 0 010 1zM14.5 17h-1a.5.5 0 010-1h1a.5.5 0 010 1zM5.5 11a.498.498 0 01-.5-.5.498.498 0 01.5-.5.498.498 0 01.5.5.5.5 0 01-.5.5zM7.5 11a.498.498 0 01-.5-.5.498.498 0 01.5-.5.498.498 0 01.5.5.5.5 0 01-.5.5zM9.5 11a.498.498 0 01-.5-.5.498.498 0 01.5-.5.498.498 0 01.5.5.5.5 0 01-.5.5zM11.5 11c-.132 0-.261-.053-.353-.147S11 10.631 11 10.5a.498.498 0 01.5-.5.498.498 0 01.5.5.5.5 0 01-.5.5zM13.5 11c-.132 0-.261-.053-.353-.147S13 10.631 13 10.5a.498.498 0 01.5-.5.498.498 0 01.5.5.498.498 0 01-.5.5zM14.5 13c-.132 0-.261-.053-.353-.147S14 12.631 14 12.5a.498.498 0 01.5-.5.5.5 0 010 1zM12.5 13c-.132 0-.261-.053-.353-.147S12 12.631 12 12.5c0-.132.053-.261.147-.353S12.369 12 12.5 12a.498.498 0 01.5.5.5.5 0 01-.5.5zM10.5 13c-.132 0-.261-.053-.353-.147S10 12.631 10 12.5a.498.498 0 01.5-.5.498.498 0 01.5.5.498.498 0 01-.5.5zM8.5 13c-.132 0-.261-.053-.353-.147S8 12.631 8 12.5a.498.498 0 01.5-.5.498.498 0 01.5.5.5.5 0 01-.5.5zM6.5 13c-.132 0-.261-.053-.353-.147S6 12.631 6 12.5a.498.498 0 01.5-.5.5.5 0 010 1zM7.5 15a.498.498 0 01-.5-.5.498.498 0 01.5-.5.5.5 0 010 1zM9.5 15a.498.498 0 01-.5-.5.498.498 0 01.5-.5.498.498 0 01.5.5.498.498 0 01-.5.5zM11.5 15c-.132 0-.261-.053-.353-.147S11 14.631 11 14.5a.498.498 0 01.5-.5.5.5 0 010 1zM12.854 4.646l-3-3a.5.5 0 00-.707 0l-3 3a.5.5 0 00.707.707L9 3.207V8.5a.5.5 0 001 0V3.207l2.146 2.146a.498.498 0 00.708 0 .5.5 0 000-.707z"
  })));
}
LiniKeyboardUp.propTypes = {
  size: PropTypes.number.isRequired
};