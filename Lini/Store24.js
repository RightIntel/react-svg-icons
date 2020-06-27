function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniStore24({
  size,
  ...props
}) {
  let className = 'Component Lini LiniStore24';

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
    d: "M18 9.5v-1a.499.499 0 00-.053-.224l-2-4A.5.5 0 0015.5 4h-6a.5.5 0 00-.5.5V8H6.14l.345-1.379a.5.5 0 10-.97-.242L5.11 8H2.309l.638-1.276a.5.5 0 00-.895-.447l-1 2a.496.496 0 00-.053.224v1c0 .816.393 1.542 1 1.999v6.501h-.5a.5.5 0 000 1h16a.5.5 0 000-1h-.5V11.5c.607-.457 1-1.182 1-1.999zM11.5 11c-.827 0-1.5-.673-1.5-1.5V9h3v.5c0 .827-.673 1.5-1.5 1.5zM14 9h3v.5c0 .827-.673 1.5-1.5 1.5S14 10.327 14 9.5V9zm2.691-1H13.89l-.75-3h2.051l1.5 3zM10 5h2.11l.75 3H10V5zM9 9.5c0 .827-.673 1.5-1.5 1.5S6 10.327 6 9.5V9h3v.5zm-7 0V9h3v.5c0 .827-.673 1.5-1.5 1.5S2 10.327 2 9.5zm1 2.45a2.501 2.501 0 002.5-.952 2.497 2.497 0 004 0c.361.48.89.827 1.5.951v6.05H3v-6.05zM16 18h-4v-6.05a2.504 2.504 0 001.5-.951 2.497 2.497 0 002.5.952v6.05z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 14.5a.5.5 0 11-1 0 .5.5 0 011 0zM4.5 15a.5.5 0 01-.354-.853l1-1a.5.5 0 01.707.707l-1 1a.498.498 0 01-.354.146zM5.5 17a.5.5 0 01-.354-.853l3-3a.5.5 0 01.707.707l-3 3a.498.498 0 01-.354.146zM8.5 17a.5.5 0 01-.354-.853l1-1a.5.5 0 01.707.707l-1 1a.498.498 0 01-.354.146zM3.5 5h-2a.5.5 0 01-.5-.5v-2a.5.5 0 01.5-.5H3V1H1.5a.5.5 0 010-1h2a.5.5 0 01.5.5v2a.5.5 0 01-.5.5H2v1h1.5a.5.5 0 010 1zM7.5 0a.5.5 0 00-.5.5V2H6V.5a.5.5 0 00-1 0v2a.5.5 0 00.5.5H7v1.5a.5.5 0 001 0v-4a.5.5 0 00-.5-.5z"
  })));
}
LiniStore24.propTypes = {
  size: PropTypes.number.isRequired
};