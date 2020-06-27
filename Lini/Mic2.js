function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniMic2({
  size,
  ...props
}) {
  let className = 'Component Lini LiniMic2';

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
    d: "M2.5 5c-.132 0-.261-.053-.353-.147S2 4.631 2 4.5a.498.498 0 01.5-.5.5.5 0 010 1zM4.5 3c-.132 0-.261-.053-.353-.147S4 2.631 4 2.5a.498.498 0 01.5-.5.498.498 0 01.5.5.498.498 0 01-.5.5zM2.5 7a.498.498 0 01-.5-.5.5.5 0 11.5.5zM4.5 5c-.132 0-.261-.053-.353-.147S4 4.631 4 4.5a.5.5 0 11.5.5zM6.5 3a.498.498 0 01-.5-.5.5.5 0 11.5.5zM4.5 9c-.132 0-.261-.053-.353-.147S4 8.631 4 8.5a.498.498 0 01.5-.5.5.5 0 010 1zM6.5 7a.498.498 0 01-.5-.5.5.5 0 11.5.5zM8.5 5c-.132 0-.261-.053-.353-.147S8 4.631 8 4.5a.5.5 0 11.5.5zM4.5 7a.498.498 0 01-.5-.5.498.498 0 01.5-.5.498.498 0 01.5.5.498.498 0 01-.5.5zM6.5 5c-.132 0-.261-.053-.353-.147S6 4.631 6 4.5a.498.498 0 01.5-.5.498.498 0 01.5.5.5.5 0 01-.5.5zM8.5 3a.498.498 0 01-.5-.5.5.5 0 11.5.5zM2.5 9c-.132 0-.261-.053-.353-.147S2 8.631 2 8.5a.498.498 0 01.5-.5.5.5 0 010 1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19.89 16.188l-7.899-9.873A6.007 6.007 0 005.999.001c-3.308 0-6 2.692-6 6 0 1.982.966 3.742 2.452 4.836a5.966 5.966 0 003.861 1.156l9.873 7.899a.5.5 0 00.437.094c.776-.2 1.509-.628 2.12-1.239s1.039-1.344 1.239-2.12a.502.502 0 00-.094-.437zM1 6c0-2.757 2.243-5 5-5 1.602 0 3.03.757 3.946 1.933a7.997 7.997 0 01-7.013 7.013A4.993 4.993 0 011 6zm3.301 4.703a9.01 9.01 0 006.402-6.401 5.006 5.006 0 01-6.402 6.402zm12.307 8.243L7.64 11.772a6.026 6.026 0 004.132-4.132l7.174 8.968c-.361 1.061-1.277 1.977-2.338 2.338z"
  })));
}
LiniMic2.propTypes = {
  size: PropTypes.number.isRequired
};