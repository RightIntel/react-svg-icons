function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniCloudCheck({
  size,
  ...props
}) {
  let className = 'Component Lini LiniCloudCheck';

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
    d: "M16 16H6.5a.5.5 0 010-1H16c1.654 0 3-1.346 3-3a3.004 3.004 0 00-4-2.83.5.5 0 01-.533-.812A2.002 2.002 0 0013 4.999a2.001 2.001 0 00-1.996 1.875.5.5 0 01-.908.256A5.012 5.012 0 006 4.999a5.006 5.006 0 00-4.98 5.455.5.5 0 01-.996.09A6.007 6.007 0 016 3.999a6.01 6.01 0 014.261 1.776A3.007 3.007 0 0113 3.999a3.004 3.004 0 012.828 4.004A4.004 4.004 0 0120 11.999c0 2.206-1.794 4-4 4z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3.5 15.5a.502.502 0 01-.354-.146l-2-2a.5.5 0 01.707-.707l1.646 1.646 4.646-4.646a.5.5 0 01.707.707l-5 5a.498.498 0 01-.354.146z"
  })));
}
LiniCloudCheck.propTypes = {
  size: PropTypes.number.isRequired
};