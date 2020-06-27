import React from 'react';
import PropTypes from 'prop-types';
export default function LiniCloudCross({
  size,
  ...props
}) {
  let className = 'Component Lini LiniCloudCross';

  if (props.className) {
    className += ' ' + props.className;
  }

  return /*#__PURE__*/React.createElement("span", Object.assign({}, props, {
    className: className
  }), /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M16 16h-4.5a.5.5 0 010-1H16c1.654 0 3-1.346 3-3a3.004 3.004 0 00-4-2.83.5.5 0 01-.533-.812A2.002 2.002 0 0013 4.999a2.001 2.001 0 00-1.996 1.875.5.5 0 01-.908.256A5.012 5.012 0 006 4.999c-2.757 0-5 2.243-5 5 0 1.037.314 2.031.909 2.875a.5.5 0 11-.818.576A5.962 5.962 0 010 9.999c0-3.308 2.692-6 6-6a6.01 6.01 0 014.261 1.776A3.007 3.007 0 0113 3.999a3.004 3.004 0 012.828 4.004A4.004 4.004 0 0120 11.999c0 2.206-1.794 4-4 4z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7.207 13l2.146-2.146a.5.5 0 00-.707-.707L6.5 12.293l-2.146-2.146a.5.5 0 00-.707.707L5.793 13l-2.146 2.146a.5.5 0 00.708.707l2.146-2.146 2.146 2.146a.498.498 0 00.708 0 .5.5 0 000-.707L7.209 13z"
  })));
}
LiniCloudCross.propTypes = {
  size: PropTypes.number.isRequired
};