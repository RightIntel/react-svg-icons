function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniClapboardPlay({
  size,
  ...props
}) {
  let className = 'Component Lini LiniClapboardPlay';

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
    d: "M17.5 2H1.499c-.827 0-1.5.673-1.5 1.5v13c0 .827.673 1.5 1.5 1.5h16c.827 0 1.5-.673 1.5-1.5v-13c0-.827-.673-1.5-1.5-1.5zm.5 1.5V5h-2.566l1.333-2h.732a.5.5 0 01.5.5zM11.434 5l1.333-2h2.798l-1.333 2h-2.798zm-4 0l1.333-2h2.798l-1.333 2H7.434zm-4 0l1.333-2h2.798L6.232 5H3.434zM1.5 3h2.066L2.233 5H1.001V3.5a.5.5 0 01.5-.5zm16 14h-16a.5.5 0 01-.5-.5V6h17v10.5a.5.5 0 01-.5.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7.5 15a.5.5 0 01-.5-.5v-6a.5.5 0 01.758-.429l5 3a.499.499 0 010 .858l-5 3a.503.503 0 01-.257.071zM8 9.383v4.234l3.528-2.117L8 9.383z"
  })));
}
LiniClapboardPlay.propTypes = {
  size: PropTypes.number.isRequired
};