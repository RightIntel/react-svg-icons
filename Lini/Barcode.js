function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniBarcode({
  size,
  ...props
}) {
  let className = 'Component Lini LiniBarcode';

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
    d: "M0 3h1v14H0V3zM16 3h.5v14H16V3zM3.5 3H4v14h-.5V3zM12 3h1v14h-1V3zM2 3h1v14H2V3zM7.5 3H8v14h-.5V3zM6 3h1v14H6V3zM19.5 3h.5v14h-.5V3zM17 3h1v14h-1V3zM8.5 3H9v14h-.5V3zM10 3h1v14h-1V3z"
  })));
}
LiniBarcode.propTypes = {
  size: PropTypes.number.isRequired
};