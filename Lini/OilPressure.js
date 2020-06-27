function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniOilPressure({
  size,
  ...props
}) {
  let className = 'Component Lini LiniOilPressure';

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
    d: "M18.854 7.146l-1-1-.001-.001c-.001-.001 0 0 0 0a.5.5 0 00-.25-.135h-.001a.504.504 0 00-.3.031l-.026.012L11.6 8.891l-.745-.745A.5.5 0 0010.501 8h-1.5V7h.5a.5.5 0 000-1h-2a.5.5 0 000 1h.5v1h-3v-.5a.501.501 0 00-.363-.481l-3.5-1a.5.5 0 00-.63.398l-.5 3a.5.5 0 00.372.567l3.621.905v2.61a.5.5 0 00.5.5h9a.5.5 0 00.434-.252l3.675-6.432.537.537a.5.5 0 00.707-.708zM1.069 9.127l.332-1.992L4 7.878V9.86l-2.931-.733zM13.21 13H5V9h5.293l.854.854a.5.5 0 00.577.094l4.523-2.262L13.21 13zM18.5 13c-.827 0-1.5-.673-1.5-1.5 0-.437.294-.87.605-1.328.141-.207.376-.554.395-.679a.5.5 0 011 0c.019.125.254.471.395.679.311.458.605.891.605 1.328 0 .827-.673 1.5-1.5 1.5zm0-2.366l-.068.1c-.159.235-.426.627-.432.767a.5.5 0 001-.001c-.007-.139-.273-.532-.432-.766l-.068-.1z"
  })));
}
LiniOilPressure.propTypes = {
  size: PropTypes.number.isRequired
};