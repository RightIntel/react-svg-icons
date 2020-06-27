function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniKeyboard({
  size,
  ...props
}) {
  let className = 'Component Lini LiniKeyboard';

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
    d: "M17.5 16h-16C.673 16 0 15.327 0 14.5v-8C0 5.673.673 5 1.5 5h16c.827 0 1.5.673 1.5 1.5v8c0 .827-.673 1.5-1.5 1.5zM1.5 6a.5.5 0 00-.5.5v8a.5.5 0 00.5.5h16a.5.5 0 00.5-.5v-8a.5.5 0 00-.5-.5h-16z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3.5 8h-1a.5.5 0 010-1h1a.5.5 0 010 1zM16.5 8h-1a.5.5 0 010-1h1a.5.5 0 010 1zM4.5 10h-2a.5.5 0 010-1h2a.5.5 0 010 1zM3.5 14h-1a.5.5 0 010-1h1a.5.5 0 010 1zM11.5 14h-6a.5.5 0 010-1h6a.5.5 0 010 1zM14.5 14h-1a.5.5 0 010-1h1a.5.5 0 010 1zM16.5 12h-3a.5.5 0 010-1H16V9.5a.5.5 0 011 0v2a.5.5 0 01-.5.5zM5.5 12h-3a.5.5 0 010-1h3a.5.5 0 010 1zM6 7.5a.5.5 0 11-1 0 .5.5 0 011 0zM8 7.5a.5.5 0 11-1 0 .5.5 0 011 0zM10 7.5a.5.5 0 11-1 0 .5.5 0 011 0zM12 7.5a.5.5 0 11-1 0 .5.5 0 011 0zM14 7.5a.5.5 0 11-1 0 .5.5 0 011 0zM7 9.5a.5.5 0 11-1 0 .5.5 0 011 0zM9 9.5a.5.5 0 11-1 0 .5.5 0 011 0zM11 9.5a.5.5 0 11-1 0 .5.5 0 011 0zM13 9.5a.5.5 0 11-1 0 .5.5 0 011 0z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15 9.5a.5.5 0 11-1 0 .5.5 0 011 0zM8 11.5a.5.5 0 11-1 0 .5.5 0 011 0zM10 11.5a.5.5 0 11-1 0 .5.5 0 011 0zM12 11.5a.5.5 0 11-1 0 .5.5 0 011 0z"
  })));
}
LiniKeyboard.propTypes = {
  size: PropTypes.number.isRequired
};