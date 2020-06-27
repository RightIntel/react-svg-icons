function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniShare2({
  size,
  ...props
}) {
  let className = 'Component Lini LiniShare2';

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
    d: "M16 12a4 4 0 00-3.325 1.779l-4.902-2.451C7.92 10.912 8 10.466 8 10s-.08-.912-.227-1.328l4.902-2.451A4 4 0 1016 0a4.004 4.004 0 00-3.773 5.327L7.325 7.778A3.998 3.998 0 000 10c0 2.206 1.794 4 4 4a4 4 0 003.325-1.779l4.902 2.451A4.004 4.004 0 0016 20c2.206 0 4-1.794 4-4s-1.794-4-4-4zm0-11c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3zM4 13c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm12 6c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3z"
  })));
}
LiniShare2.propTypes = {
  size: PropTypes.number.isRequired
};