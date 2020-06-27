function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniCross2({
  size,
  ...props
}) {
  let className = 'Component Lini LiniCross2';

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
    d: "M10.707 10.5l8.646-8.646a.5.5 0 00-.707-.707L10 9.793 1.354 1.147a.5.5 0 00-.707.707L9.293 10.5.647 19.146a.5.5 0 00.708.707l8.646-8.646 8.646 8.646a.498.498 0 00.708 0 .5.5 0 000-.707L10.709 10.5z"
  })));
}
LiniCross2.propTypes = {
  size: PropTypes.number.isRequired
};