function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniCloudSnow({
  size,
  ...props
}) {
  let className = 'Component Lini LiniCloudSnow';

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
    d: "M16 13H6c-3.308 0-6-2.692-6-6s2.692-6 6-6a6.01 6.01 0 014.261 1.776A3.007 3.007 0 0113 1a3.004 3.004 0 012.828 4.004A4.004 4.004 0 0120 9c0 2.206-1.794 4-4 4zM6 2C3.243 2 1 4.243 1 7s2.243 5 5 5h10c1.654 0 3-1.346 3-3a3.004 3.004 0 00-4-2.83.5.5 0 01-.533-.812A2.002 2.002 0 0013 1.999a2.001 2.001 0 00-1.996 1.875.5.5 0 01-.908.256A5.012 5.012 0 006 1.999zM6.724 18.053L5.618 17.5l1.106-.553a.5.5 0 00-.447-.895l-1.276.638v-1.191a.5.5 0 00-1 0v1.191l-1.276-.638a.5.5 0 00-.447.895l1.106.553-1.106.553a.5.5 0 00.447.895l1.276-.638v1.191a.5.5 0 001 0V18.31l1.276.638a.497.497 0 00.671-.224.5.5 0 00-.224-.671zM18.724 18.053l-1.106-.553 1.106-.553a.5.5 0 00-.447-.895l-1.276.638v-1.191a.5.5 0 00-1 0v1.191l-1.276-.638a.5.5 0 00-.447.895l1.106.553-1.106.553a.5.5 0 00.447.895l1.276-.638v1.191a.5.5 0 001 0V18.31l1.276.638a.497.497 0 00.671-.224.5.5 0 00-.224-.671zM12.724 18.053l-1.106-.553 1.106-.553a.5.5 0 00-.447-.895l-1.276.638v-1.191a.5.5 0 00-1 0v1.191l-1.276-.638a.5.5 0 00-.447.895l1.106.553-1.106.553a.5.5 0 00.447.895l1.276-.638v1.191a.5.5 0 001 0V18.31l1.276.638a.497.497 0 00.671-.224.5.5 0 00-.224-.671z"
  })));
}
LiniCloudSnow.propTypes = {
  size: PropTypes.number.isRequired
};