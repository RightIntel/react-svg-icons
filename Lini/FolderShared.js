function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniFolderShared({
  size,
  ...props
}) {
  let className = 'Component Lini LiniFolderShared';

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
    d: "M18.5 18h-17C.673 18 0 17.327 0 16.5V6c0-.352.119-.856.276-1.171l.553-1.106c.206-.413.71-.724 1.171-.724h7c.461 0 .964.311 1.171.724l.553 1.106A.406.406 0 0011 5h7.5c.827 0 1.5.673 1.5 1.5v10c0 .827-.673 1.5-1.5 1.5zM2 4a.404.404 0 00-.276.171l-.553 1.106A2.056 2.056 0 001 6.001v10.5a.5.5 0 00.5.5h17a.5.5 0 00.5-.5v-10a.5.5 0 00-.5-.5H11c-.461 0-.965-.311-1.171-.724l-.553-1.106A.406.406 0 009 4H2z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.5 15a3.5 3.5 0 01-2.334-.891.5.5 0 11.667-.745c.459.411 1.05.637 1.667.637 1.378 0 2.5-1.122 2.5-2.5a.5.5 0 01.5-.5h2a.5.5 0 010 1h-1.536a3.505 3.505 0 01-3.464 3zM6.5 12h-2a.5.5 0 010-1h1.536A3.505 3.505 0 019.5 8c.863 0 1.691.317 2.333.891a.5.5 0 11-.667.745A2.497 2.497 0 009.499 9a2.503 2.503 0 00-2.5 2.5.5.5 0 01-.5.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.5 13c-.827 0-1.5-.673-1.5-1.5S8.673 10 9.5 10s1.5.673 1.5 1.5-.673 1.5-1.5 1.5zm0-2a.5.5 0 100 1 .5.5 0 000-1z"
  })));
}
LiniFolderShared.propTypes = {
  size: PropTypes.number.isRequired
};