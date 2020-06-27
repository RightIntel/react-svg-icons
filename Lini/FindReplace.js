function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniFindReplace({
  size,
  ...props
}) {
  let className = 'Component Lini LiniFindReplace';

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
    d: "M17.5 11.5a.5.5 0 00.354-.147l2-2a.5.5 0 00-.707-.707l-1.149 1.149a7.94 7.94 0 00-2.341-5.452A7.948 7.948 0 0010 2a8 8 0 00-7.034 4.186.5.5 0 10.879.477A7.001 7.001 0 0110 2.999c3.86 0 7 3.14 7 7v1a.5.5 0 00.5.5zM10 18a7.988 7.988 0 007.077-4.266.5.5 0 00-.884-.468A6.99 6.99 0 0110 17c-3.86 0-7-3.14-7-7V9a.5.5 0 00-.854-.354l-2 2a.5.5 0 00.707.707l1.149-1.149a7.94 7.94 0 002.341 5.452A7.948 7.948 0 0010 17.999z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.854 13.146l-2.409-2.409c.35-.491.556-1.09.556-1.737 0-1.654-1.346-3-3-3s-3 1.346-3 3 1.346 3 3 3a2.98 2.98 0 001.737-.556l2.409 2.409a.498.498 0 00.708 0 .5.5 0 000-.707zM7 9c0-1.103.897-2 2-2s2 .897 2 2-.897 2-2 2-2-.897-2-2z"
  })));
}
LiniFindReplace.propTypes = {
  size: PropTypes.number.isRequired
};