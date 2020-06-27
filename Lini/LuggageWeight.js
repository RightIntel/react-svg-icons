function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniLuggageWeight({
  size,
  ...props
}) {
  let className = 'Component Lini LiniLuggageWeight';

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
    d: "M16.5 4a.499.499 0 01-.25-.933l1.732-1a.5.5 0 01.5.866l-1.732 1A.504.504 0 0116.5 4z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.5 17H17V6.964A3.505 3.505 0 0020 3.5C20 1.57 18.43 0 16.5 0S13 1.57 13 3.5a3.505 3.505 0 003 3.464V17H1.5c-.827 0-1.5.673-1.5 1.5S.673 20 1.5 20h17c.827 0 1.5-.673 1.5-1.5s-.673-1.5-1.5-1.5zM14 3.5C14 2.122 15.122 1 16.5 1S19 2.122 19 3.5 17.878 6 16.5 6 14 4.878 14 3.5zM18.5 19h-17a.5.5 0 010-1h17a.5.5 0 010 1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.5 8H10v-.5C10 6.673 9.327 6 8.5 6h-2C5.673 6 5 6.673 5 7.5V8H3.5C2.673 8 2 8.673 2 9.5v5c0 .827.673 1.5 1.5 1.5h8c.827 0 1.5-.673 1.5-1.5v-5c0-.827-.673-1.5-1.5-1.5zM6 7.5a.5.5 0 01.5-.5h2a.5.5 0 01.5.5V8H6v-.5zm6 7a.5.5 0 01-.5.5h-8a.5.5 0 01-.5-.5v-5a.5.5 0 01.5-.5h8a.5.5 0 01.5.5v5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4.5 14a.5.5 0 01-.5-.5v-3a.5.5 0 011 0v3a.5.5 0 01-.5.5zM10.5 14a.5.5 0 01-.5-.5v-3a.5.5 0 011 0v3a.5.5 0 01-.5.5z"
  })));
}
LiniLuggageWeight.propTypes = {
  size: PropTypes.number.isRequired
};