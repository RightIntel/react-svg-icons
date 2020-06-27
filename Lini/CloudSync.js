function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniCloudSync({
  size,
  ...props
}) {
  let className = 'Component Lini LiniCloudSync';

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
    d: "M4.481 15.787a.505.505 0 01-.138-.019 6.041 6.041 0 01-3.111-2.126A5.947 5.947 0 01.001 10c0-3.308 2.692-6 6-6a6.01 6.01 0 014.261 1.776A3.007 3.007 0 0113.001 4a3.004 3.004 0 012.828 4.004 4.004 4.004 0 013.536 6.162 4.005 4.005 0 01-1.649 1.449.5.5 0 01-.429-.903A3.015 3.015 0 0019.001 12a3.004 3.004 0 00-4-2.83.5.5 0 01-.533-.812 2.002 2.002 0 00-1.467-3.359 2.001 2.001 0 00-1.996 1.875.5.5 0 01-.908.256 5.012 5.012 0 00-4.096-2.131c-2.757 0-5 2.243-5 5a5.021 5.021 0 003.618 4.807.5.5 0 01-.137.98z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.854 15.146a.5.5 0 00-.707 0l-.146.146v-.293a4.004 4.004 0 00-5.715-3.615.5.5 0 10.429.903 3.004 3.004 0 014.286 2.712v.293l-.146-.146a.5.5 0 00-.707.707l1 1a.498.498 0 00.708 0l1-1a.5.5 0 000-.707zM12.952 17.949a.5.5 0 00-.666-.237A3.004 3.004 0 018 15v-.293l.146.146a.498.498 0 00.708 0 .5.5 0 000-.707l-1-1a.5.5 0 00-.707 0l-1 1a.5.5 0 00.707.707L7 14.707V15a4.004 4.004 0 005.715 3.615.5.5 0 00.237-.666z"
  })));
}
LiniCloudSync.propTypes = {
  size: PropTypes.number.isRequired
};