function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniCherry({
  size,
  ...props
}) {
  let className = 'Component Lini LiniCherry';

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
    d: "M7.501 8a.475.475 0 01-.099-.01c-1.339-.268-2.694-1.096-3.717-2.273C2.598 4.467 2 2.969 2 1.5a.502.502 0 01.777-.416C4.151 2 5.729 2 7.255 2c1.608 0 3.271 0 4.571 1.121a.5.5 0 11-.653.757c-1.019-.879-2.363-.879-3.918-.879-1.319 0-2.783 0-4.169-.611.45 2.32 2.579 4.234 4.512 4.62a.5.5 0 01-.098.99z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.5 6a.502.502 0 01-.354-.146C8.307 5.015 6.517 5 6.499 5A.5.5 0 016.5 4c.09 0 2.22.013 3.354 1.146a.5.5 0 01-.354.853zM3.5 16a.5.5 0 01-.5-.5C3 14.122 4.122 13 5.5 13a.5.5 0 010 1c-.827 0-1.5.673-1.5 1.5a.5.5 0 01-.5.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.466 6.109a12.588 12.588 0 011.527-1.908l.153.153a.498.498 0 00.708 0l2-2a.5.5 0 000-.707l-1-1a.5.5 0 00-.707 0l-2 2a.5.5 0 000 .707l.043.043c-.572.352-1.523.976-2.626 1.852-1.567 1.246-3.732 3.249-5.309 5.814A4.505 4.505 0 001 15.499c0 2.481 2.019 4.5 4.5 4.5s4.5-2.019 4.5-4.5c0-1.86-1.134-3.46-2.748-4.145 1.483-2.325 3.467-4.155 4.917-5.309a24 24 0 01.305-.239A10.786 10.786 0 0011.359 8.2a8.22 8.22 0 00-.395 2.832 4.478 4.478 0 00-1.714.57.499.499 0 10.501.865 3.504 3.504 0 015.25 3.032 3.504 3.504 0 01-5.25 3.032.5.5 0 00-.501.865 4.505 4.505 0 006.751-3.898 4.506 4.506 0 00-4.036-4.476c-.09-1.995.751-3.758 1.502-4.915zM16.5 1.707l.293.293L15.5 3.293 15.207 3 16.5 1.707zM9 15.5C9 17.43 7.43 19 5.5 19S2 17.43 2 15.5 3.57 12 5.5 12 9 13.57 9 15.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.5 14.268a.5.5 0 01-.251-.933 2.501 2.501 0 011.25-.335.5.5 0 010 1c-.264 0-.523.069-.75.2a.494.494 0 01-.25.067z"
  })));
}
LiniCherry.propTypes = {
  size: PropTypes.number.isRequired
};