function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniCashier({
  size,
  ...props
}) {
  let className = 'Component Lini LiniCashier';

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
    d: "M5 11.5a.5.5 0 11-1 0 .5.5 0 011 0zM7 11.5a.5.5 0 11-1 0 .5.5 0 011 0zM9 11.5a.5.5 0 11-1 0 .5.5 0 011 0zM11 11.5a.5.5 0 11-1 0 .5.5 0 011 0zM13 11.5a.5.5 0 11-1 0 .5.5 0 011 0zM15 11.5a.5.5 0 11-1 0 .5.5 0 011 0zM10 17.5a.5.5 0 11-1 0 .5.5 0 011 0zM4 13.5a.5.5 0 11-1 0 .5.5 0 011 0zM6 13.5a.5.5 0 11-1 0 .5.5 0 011 0zM8 13.5a.5.5 0 11-1 0 .5.5 0 011 0zM10 13.5a.5.5 0 11-1 0 .5.5 0 011 0zM12 13.5a.5.5 0 11-1 0 .5.5 0 011 0zM14 13.5a.5.5 0 11-1 0 .5.5 0 011 0zM16 13.5a.5.5 0 11-1 0 .5.5 0 011 0zM14.5 8h-3a.5.5 0 010-1h3a.5.5 0 010 1zM7.5 4h-1a.5.5 0 010-1h1a.5.5 0 010 1zM7.5 6h-1a.5.5 0 010-1h1a.5.5 0 010 1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.658 14.393L17 9.419V6.5c0-.827-.673-1.5-1.5-1.5H15V4h2.5a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5h-6a.5.5 0 00-.5.5v3a.5.5 0 00.5.5H14v1h-4V1.5a.5.5 0 00-.5-.5h-5a.5.5 0 00-.5.5V5h-.5C2.673 5 2 5.673 2 6.5v2.919L.342 14.393A7.846 7.846 0 000 16.5v2c0 .827.673 1.5 1.5 1.5h16c.827 0 1.5-.673 1.5-1.5v-2c0-.606-.15-1.532-.342-2.107zM12 1h5v2h-5V1zM5 2h4v5H5V2zM3.5 6H4v1.5a.5.5 0 00.5.5h5a.5.5 0 00.5-.5V6h5.5a.5.5 0 01.5.5V9H3V6.5a.5.5 0 01.5-.5zm-.64 4h13.279l1.57 4.709c.032.095.062.204.091.321a1.482 1.482 0 00-.3-.03h-16c-.103 0-.203.01-.3.03.029-.117.059-.226.091-.321L2.861 10zm14.64 9h-16a.5.5 0 01-.5-.5v-2a.5.5 0 01.5-.5h16a.5.5 0 01.5.5v2a.5.5 0 01-.5.5z"
  })));
}
LiniCashier.propTypes = {
  size: PropTypes.number.isRequired
};