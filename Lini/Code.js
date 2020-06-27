function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniCode({
  size,
  ...props
}) {
  let className = 'Component Lini LiniCode';

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
    d: "M5 15a.502.502 0 01-.354-.146l-4-4a.5.5 0 010-.707l4-4a.5.5 0 01.707.707L1.707 10.5l3.646 3.646a.5.5 0 01-.354.853zM15 15a.5.5 0 01-.354-.853l3.646-3.646-3.646-3.646a.5.5 0 01.707-.707l4 4a.5.5 0 010 .707l-4 4a.498.498 0 01-.354.146zM7.5 15a.5.5 0 01-.424-.765l5-8a.5.5 0 01.848.53l-5 8A.5.5 0 017.5 15z"
  })));
}
LiniCode.propTypes = {
  size: PropTypes.number.isRequired
};