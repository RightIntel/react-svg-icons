function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniHeight({
  size,
  ...props
}) {
  let className = 'Component Lini LiniHeight';

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
    d: "M5.5 5C4.122 5 3 3.878 3 2.5S4.122 0 5.5 0 8 1.122 8 2.5 6.878 5 5.5 5zm0-4C4.673 1 4 1.673 4 2.5S4.673 4 5.5 4 7 3.327 7 2.5 6.327 1 5.5 1zM8.5 6h-6C1.673 6 1 6.673 1 7.5v4a1.502 1.502 0 002 1.414V18.5a1.502 1.502 0 002.5 1.117A1.502 1.502 0 008 18.5v-5.586a1.502 1.502 0 002-1.414v-4C10 6.673 9.327 6 8.5 6zm.5 5.5a.5.5 0 01-1 0v-3a.5.5 0 00-1 0v10a.5.5 0 01-1 0v-6a.5.5 0 00-1 0v6a.5.5 0 01-1 0v-10a.5.5 0 00-1 0v3a.5.5 0 01-1 0v-4a.5.5 0 01.5-.5h6a.5.5 0 01.5.5v4zM18.5 1h-4a.5.5 0 010-1h4a.5.5 0 010 1zM18.5 20h-4a.5.5 0 010-1h4a.5.5 0 010 1zM18.146 15.646L17 16.792V3.206l1.146 1.146a.498.498 0 00.708 0 .5.5 0 000-.707l-2-2a.5.5 0 00-.707 0l-2 2a.5.5 0 00.707.707L16 3.206v13.586l-1.146-1.146a.5.5 0 00-.707.707l2 2a.498.498 0 00.708 0l2-2a.5.5 0 00-.707-.707z"
  })));
}
LiniHeight.propTypes = {
  size: PropTypes.number.isRequired
};