function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniVector({
  size,
  ...props
}) {
  let className = 'Component Lini LiniVector';

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
    d: "M18.5 10.01c-.228 0-.445.052-.639.144L15 7.293V5.5a.5.5 0 00-.5-.5h-1.793L9.853 2.146A1.502 1.502 0 008.5 0C7.673 0 7 .673 7 1.5a1.502 1.502 0 002.146 1.353l1.355 1.355c-1.161-.284-2.423-.265-3.773.058-1.594.382-3.016 1.123-4.041 1.77A.506.506 0 002.5 6h-2a.5.5 0 00-.5.5v2a.5.5 0 00.5.5h2a.5.5 0 00.5-.5V7.023c2.089-1.369 5.808-3.131 9-1.097V7.5a.5.5 0 00.5.5h1.573c2.092 3.293.058 7.23-1.097 9H11.5a.5.5 0 00-.5.5v2a.5.5 0 00.5.5h2a.5.5 0 00.5-.5v-2a.506.506 0 00-.036-.187c.646-1.025 1.387-2.447 1.77-4.041.324-1.351.343-2.612.058-3.773l1.36 1.361a1.497 1.497 0 001.348 2.141c.824 0 1.495-.671 1.495-1.495s-.671-1.495-1.495-1.495zM2 8H1V7h1v1zm11 11h-1v-1h1v1zM8 1.5a.5.5 0 111 0 .5.5 0 01-1 0zM13 6h1v1h-1V6zm5.5 6a.495.495 0 11.001-.991.495.495 0 01-.001.991z"
  })));
}
LiniVector.propTypes = {
  size: PropTypes.number.isRequired
};