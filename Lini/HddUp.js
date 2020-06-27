function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniHddUp({
  size,
  ...props
}) {
  let className = 'Component Lini LiniHddUp';

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
    d: "M17.5 20h-16C.673 20 0 19.327 0 18.5v-3c0-.627.22-1.557.5-2.118l2.106-4.211C2.934 8.514 3.766 8 4.5 8h3a.5.5 0 010 1h-3c-.362 0-.838.295-1 .618l-2.106 4.211C1.184 14.249 1 15.03 1 15.5v3a.5.5 0 00.5.5h16a.5.5 0 00.5-.5v-3c0-.47-.184-1.251-.394-1.671L15.5 9.618c-.162-.323-.638-.618-1-.618h-3a.5.5 0 010-1h3c.734 0 1.566.514 1.894 1.171l2.106 4.211c.28.561.5 1.491.5 2.118v3c0 .827-.673 1.5-1.5 1.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.5 18h-1a.5.5 0 010-1h1a.5.5 0 010 1zM16.5 16h-14a.5.5 0 010-1h14a.5.5 0 010 1zM12.854 4.646l-3-3a.5.5 0 00-.707 0l-3 3a.5.5 0 00.707.707L9 3.207V11.5a.5.5 0 001 0V3.207l2.146 2.146a.498.498 0 00.708 0 .5.5 0 000-.707z"
  })));
}
LiniHddUp.propTypes = {
  size: PropTypes.number.isRequired
};