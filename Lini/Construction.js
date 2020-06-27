function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniConstruction({
  size,
  ...props
}) {
  let className = 'Component Lini LiniConstruction';

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
    d: "M20 5V3.5a.5.5 0 00-.5-.5H.5a.5.5 0 00-.5.5v6a.5.5 0 00.5.5H2v6h-.5a.5.5 0 000 1h4a.5.5 0 000-1H5v-3h10v3h-.5a.5.5 0 000 1h4a.5.5 0 000-1H18v-6h1.5a.5.5 0 00.5-.5V5zm-1-.207L14.793 9h-3.586l5-5H19v.793zM6.207 9l5-5h3.586l-5 5H6.207zm-5 0l5-5h3.586l-5 5H1.207zm3.586-5L1 7.793V4h3.793zM3 16v-6h1v6H3zm2-4v-2h10v2H5zm12 4h-1v-6h1v6zm-.793-7L19 6.207V9h-2.793z"
  })));
}
LiniConstruction.propTypes = {
  size: PropTypes.number.isRequired
};