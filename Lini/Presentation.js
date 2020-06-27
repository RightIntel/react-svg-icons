function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniPresentation({
  size,
  ...props
}) {
  let className = 'Component Lini LiniPresentation';

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
    d: "M18.5 0H.5a.5.5 0 00-.5.5v15a.5.5 0 00.5.5h7.793l-3.146 3.146a.5.5 0 00.708.707l3.146-3.146V19.5a.5.5 0 001 0v-2.793l3.146 3.146a.498.498 0 00.708 0 .5.5 0 000-.707L10.709 16h7.793a.5.5 0 00.5-.5V.5a.5.5 0 00-.5-.5zM1 1h17v12H1V1zm17 14H1v-1h17v1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.787 6.59l-5-3.5A.5.5 0 007 3.499v7a.5.5 0 00.787.41l5-3.5a.499.499 0 000-.82zM8 9.54V4.461l3.628 2.54L8 9.541z"
  })));
}
LiniPresentation.propTypes = {
  size: PropTypes.number.isRequired
};