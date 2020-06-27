function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniSpeedMedium({
  size,
  ...props
}) {
  let className = 'Component Lini LiniSpeedMedium';

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
    d: "M9.5 15c-.827 0-1.5-.673-1.5-1.5 0-.569.84-5.173 1.008-6.09a.5.5 0 01.984 0C10.16 8.327 11 12.931 11 13.5c0 .827-.673 1.5-1.5 1.5zm0-4.666c-.283 1.619-.499 2.946-.5 3.167a.5.5 0 001 0c-.001-.221-.217-1.548-.5-3.166z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.218 5.783C14.424 3.989 12.038 3 9.5 3s-4.923.988-6.717 2.783S.001 9.963.001 12.5c0 1.889.553 3.714 1.6 5.278a.5.5 0 00.416.222h14.969a.5.5 0 00.416-.222 9.454 9.454 0 001.6-5.278 9.436 9.436 0 00-2.782-6.717zM16.712 17H2.287a8.453 8.453 0 01-1.273-4h.485a.5.5 0 000-1h-.485c.25-4.29 3.695-7.735 7.985-7.985V4.5a.5.5 0 001 0v-.485c4.29.25 7.735 3.695 7.985 7.985h-.485a.5.5 0 000 1h.485a8.453 8.453 0 01-1.273 4z"
  })));
}
LiniSpeedMedium.propTypes = {
  size: PropTypes.number.isRequired
};