function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniKeyboardDown({
  size,
  ...props
}) {
  let className = 'Component Lini LiniKeyboardDown';

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
    d: "M17.5 13h-6a.5.5 0 010-1h6a.5.5 0 00.5-.5v-8a.5.5 0 00-.5-.5h-16a.5.5 0 00-.5.5v8a.5.5 0 00.5.5h6a.5.5 0 010 1h-6C.673 13 0 12.327 0 11.5v-8C0 2.673.673 2 1.5 2h16c.827 0 1.5.673 1.5 1.5v8c0 .827-.673 1.5-1.5 1.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3.5 5h-1a.5.5 0 010-1h1a.5.5 0 010 1zM16.5 5h-1a.5.5 0 010-1h1a.5.5 0 010 1zM4.5 7h-2a.5.5 0 010-1h2a.5.5 0 010 1zM16.5 9h-3a.5.5 0 010-1H16V6.5a.5.5 0 011 0v2a.5.5 0 01-.5.5zM5.5 9h-3a.5.5 0 010-1h3a.5.5 0 010 1zM3.5 11h-1a.5.5 0 010-1h1a.5.5 0 010 1zM11.5 11h-6a.5.5 0 010-1h6a.5.5 0 010 1zM14.5 11h-1a.5.5 0 010-1h1a.5.5 0 010 1zM5.5 5c-.132 0-.261-.053-.353-.147S5 4.631 5 4.5a.5.5 0 11.5.5zM7.5 5c-.132 0-.261-.053-.353-.147S7 4.631 7 4.5a.498.498 0 01.5-.5.498.498 0 01.5.5.498.498 0 01-.5.5zM9.5 5c-.132 0-.261-.053-.353-.147S9 4.631 9 4.5a.498.498 0 01.5-.5.498.498 0 01.5.5.5.5 0 01-.5.5zM11.5 5c-.132 0-.261-.053-.353-.147S11 4.631 11 4.5a.498.498 0 01.5-.5.5.5 0 010 1zM13.5 5c-.132 0-.261-.053-.353-.147S13 4.631 13 4.5a.498.498 0 01.5-.5.5.5 0 010 1zM14.5 7c-.132 0-.261-.053-.353-.147S14 6.631 14 6.5a.498.498 0 01.5-.5.5.5 0 010 1zM12.5 7c-.132 0-.261-.053-.353-.147S12 6.631 12 6.5a.5.5 0 11.5.5zM10.5 7c-.132 0-.261-.053-.353-.147S10 6.631 10 6.5a.498.498 0 01.5-.5.498.498 0 01.5.5.5.5 0 01-.5.5zM8.5 7c-.132 0-.261-.053-.353-.147S8 6.631 8 6.5a.5.5 0 11.5.5zM6.5 7a.498.498 0 01-.5-.5.5.5 0 11.5.5zM7.5 9c-.132 0-.261-.053-.353-.147S7 8.631 7 8.5a.5.5 0 11.5.5zM9.5 9c-.132 0-.261-.053-.353-.147S9 8.631 9 8.5a.498.498 0 01.5-.5.5.5 0 010 1zM11.5 9c-.132 0-.261-.053-.353-.147S11 8.631 11 8.5a.498.498 0 01.5-.5.5.5 0 010 1zM12.854 15.646a.5.5 0 00-.707 0l-2.146 2.146v-5.293a.5.5 0 00-1 0v5.293l-2.146-2.146a.5.5 0 00-.707.707l3 3a.498.498 0 00.708 0l3-3a.5.5 0 000-.707z"
  })));
}
LiniKeyboardDown.propTypes = {
  size: PropTypes.number.isRequired
};