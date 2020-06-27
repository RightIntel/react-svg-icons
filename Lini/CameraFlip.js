function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniCameraFlip({
  size,
  ...props
}) {
  let className = 'Component Lini LiniCameraFlip';

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
    d: "M16 10.55V5.5c0-.827-.673-1.5-1.5-1.5h-.793l-.854-.854A.5.5 0 0012.499 3h-5a.504.504 0 00-.354.146L6.291 4h-.793c-.827 0-1.5.673-1.5 1.5v5.051c-1.913.398-4 1.134-4 2.449 0 1.93 4.568 2.805 8.479 2.969h.021a.5.5 0 00.02-.999c-2.167-.09-4.147-.381-5.575-.817C1.404 13.683.997 13.193.997 13c0-.143.214-.417.815-.717.537-.268 1.286-.51 2.187-.709a1.502 1.502 0 001.498 1.427h9c.803 0 1.46-.634 1.498-1.427.901.199 1.649.441 2.187.709.602.3.815.574.815.717 0 .214-.471.749-2.253 1.242-1.643.454-3.864.722-6.254.755a.499.499 0 00-.152.974l3 1.003a.5.5 0 10.317-.949l-.495-.166c1.446-.132 2.764-.354 3.85-.654 1.982-.548 2.987-1.29 2.987-2.206 0-1.315-2.087-2.051-4-2.45zM14.5 12h-9a.5.5 0 01-.5-.5v-.529V5.5a.5.5 0 01.5-.5h1c.133 0 .26-.053.354-.146L7.708 4h4.586l.854.854a.5.5 0 00.354.146h1a.5.5 0 01.5.5v6.001a.5.5 0 01-.5.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 11c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm0-5c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z"
  })));
}
LiniCameraFlip.propTypes = {
  size: PropTypes.number.isRequired
};