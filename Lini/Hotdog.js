function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniHotdog({
  size,
  ...props
}) {
  let className = 'Component Lini LiniHotdog';

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
    d: "M3.5 18a.5.5 0 01-.5-.5v-1C3 15.122 4.122 14 5.5 14c.827 0 1.5-.673 1.5-1.5C7 11.122 8.122 10 9.5 10c.827 0 1.5-.673 1.5-1.5C11 7.122 12.122 6 13.5 6c.827 0 1.5-.673 1.5-1.5v-1a.5.5 0 011 0v1C16 5.878 14.878 7 13.5 7c-.827 0-1.5.673-1.5 1.5 0 1.378-1.122 2.5-2.5 2.5-.827 0-1.5.673-1.5 1.5C8 13.878 6.878 15 5.5 15c-.827 0-1.5.673-1.5 1.5v1a.5.5 0 01-.5.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19 4.5c0-.935-.364-1.814-1.025-2.475S16.435 1 15.5 1c-.831 0-1.618.288-2.247.817C12.793 1.466 11.915 1 10.5 1c-.931 0-2.04.384-3.297 1.142-1.115.672-2.28 1.603-3.369 2.692s-2.02 2.254-2.692 3.369C.384 9.46 0 10.569 0 11.5c0 1.415.466 2.292.817 2.753A3.472 3.472 0 000 16.5c0 .935.364 1.814 1.025 2.475S2.565 20 3.5 20c.831 0 1.618-.288 2.247-.817.46.351 1.338.817 2.753.817.931 0 2.04-.384 3.297-1.142 1.115-.672 2.28-1.603 3.369-2.692s2.02-2.254 2.692-3.369C18.616 11.54 19 10.431 19 9.5c0-1.415-.466-2.292-.817-2.753A3.472 3.472 0 0019 4.5zM4.541 5.541C6.692 3.39 9.031 2 10.5 2c1.036 0 1.679.29 2.028.523L1.523 13.528C1.29 13.179 1 12.537 1 11.5c0-1.469 1.39-3.808 3.541-5.959zM3.5 19c-.668 0-1.296-.26-1.768-.732S1 17.168 1 16.5s.26-1.296.732-1.768l12-12C14.204 2.26 14.832 2 15.5 2s1.296.26 1.768.732S18 3.832 18 4.5s-.26 1.296-.732 1.768l-12 12c-.472.472-1.1.732-1.768.732zm10.959-3.541C12.308 17.61 9.969 19 8.5 19c-1.036 0-1.679-.29-2.028-.523L17.477 7.472c.233.349.523.991.523 2.028 0 1.469-1.39 3.808-3.541 5.959z"
  })));
}
LiniHotdog.propTypes = {
  size: PropTypes.number.isRequired
};