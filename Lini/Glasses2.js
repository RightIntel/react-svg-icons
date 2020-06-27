function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniGlasses2({
  size,
  ...props
}) {
  let className = 'Component Lini LiniGlasses2';

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
    d: "M19.5 9h-.627A4.007 4.007 0 0015 6a4.006 4.006 0 00-3.7 2.482 1.991 1.991 0 00-2.6 0A4.006 4.006 0 005 6a4.007 4.007 0 00-3.873 3H.5a.5.5 0 000 1H1c0 2.206 1.794 4 4 4s4-1.794 4-4c0-.551.449-1 1-1s1 .449 1 1c0 2.206 1.794 4 4 4s4-1.794 4-4h.5a.5.5 0 000-1zM5 13c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm10 0c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3z"
  })));
}
LiniGlasses2.propTypes = {
  size: PropTypes.number.isRequired
};