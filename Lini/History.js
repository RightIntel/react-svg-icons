function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniHistory({
  size,
  ...props
}) {
  let className = 'Component Lini LiniHistory';

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
    d: "M10 20a9.997 9.997 0 01-8.809-5.263.5.5 0 11.88-.474A8.995 8.995 0 009.999 19c4.963 0 9-4.037 9-9s-4.037-9-9-9a9.002 9.002 0 00-7.914 4.71.5.5 0 01-.928-.344l.853-3.972a.5.5 0 01.978.21l-.349 1.623a9.997 9.997 0 017.36-3.228c2.671 0 5.182 1.04 7.071 2.929s2.929 4.4 2.929 7.071c0 2.671-1.04 5.182-2.929 7.071s-4.4 2.929-7.071 2.929z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 10.5a.5.5 0 01-.243-.063l-4.5-2.5a.5.5 0 01.486-.874l4.24 2.355 5.249-3.34a.5.5 0 11.537.843l-5.5 3.5a.5.5 0 01-.268.078z"
  })));
}
LiniHistory.propTypes = {
  size: PropTypes.number.isRequired
};