function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniGamepad({
  size,
  ...props
}) {
  let className = 'Component Lini LiniGamepad';

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
    d: "M15 15a5.013 5.013 0 01-3-1H8c-.861.646-1.919 1-3 1-2.757 0-5-2.243-5-5s2.243-5 5-5h10c2.757 0 5 2.243 5 5s-2.243 5-5 5zm-2.828-2c.114 0 .226.039.314.111a3.956 3.956 0 002.514.888c2.206 0 4-1.794 4-4s-1.794-4-4-4H5c-2.206 0-4 1.794-4 4s1.794 4 4 4c.926 0 1.795-.307 2.514-.888A.5.5 0 017.828 13h4.343z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7.5 9H6V7.5a.5.5 0 00-1 0V9H3.5a.5.5 0 000 1H5v1.5a.5.5 0 001 0V10h1.5a.5.5 0 000-1zM13.5 10c-.827 0-1.5-.673-1.5-1.5S12.673 7 13.5 7s1.5.673 1.5 1.5-.673 1.5-1.5 1.5zm0-2a.5.5 0 100 1 .5.5 0 000-1zM16.5 12c-.827 0-1.5-.673-1.5-1.5S15.673 9 16.5 9s1.5.673 1.5 1.5-.673 1.5-1.5 1.5zm0-2a.5.5 0 100 1 .5.5 0 000-1z"
  })));
}
LiniGamepad.propTypes = {
  size: PropTypes.number.isRequired
};