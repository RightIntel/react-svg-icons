function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniTombstoneHipster({
  size,
  ...props
}) {
  let className = 'Component Lini LiniTombstoneHipster';

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
    d: "M7 7V6c0-.551-.449-1-1-1H5c-.551 0-1 .449-1 1v3.5a.5.5 0 001 0V8h.191l.862 1.724a.501.501 0 00.895-.447l-.659-1.319A1 1 0 007.001 7zM5 6h1v1H5V6zM8.5 10a.5.5 0 01-.5-.5v-4a.5.5 0 011 0v4a.5.5 0 01-.5.5zM10.5 10a.5.5 0 01-.5-.5V6c0-.551.449-1 1-1h1c.551 0 1 .449 1 1v1c0 .551-.449 1-1 1h-1v1.5a.5.5 0 01-.5.5zm.5-3h1V6h-1v1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.51 2.49A8.446 8.446 0 0011.5 0h-3C6.23 0 4.095.884 2.49 2.49S0 6.23 0 8.5v10c0 .827.673 1.5 1.5 1.5h17c.827 0 1.5-.673 1.5-1.5v-10c0-2.27-.884-4.405-2.49-6.01zM1 18.5v-10C1 4.364 4.364 1 8.5 1S16 4.364 16 8.5v10a.5.5 0 01-.5.5h-14a.5.5 0 01-.5-.5zm18 0a.5.5 0 01-.5.5h-1.586c.056-.157.086-.325.086-.5v-10c0-2.27-.884-4.405-2.49-6.01a8.538 8.538 0 00-1.834-1.397C16.255 1.659 19 4.765 19 8.5v10z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.923 14.233a.502.502 0 00-.521-.224 2.784 2.784 0 01-.536.056c-.872 0-1.402-.503-1.962-1.036-.533-.506-1.084-1.03-1.903-1.03-.597 0-1.133.263-1.5.679a1.996 1.996 0 00-1.5-.679c-.819 0-1.37.524-1.903 1.03-.561.533-1.09 1.036-1.962 1.036-.169 0-.349-.019-.536-.056a.502.502 0 00-.498.791c1.157 1.543 2.642 1.867 3.685 1.867.621 0 1.115-.117 1.355-.187.531-.154 1.018-.542 1.36-1.028.343.486.83.873 1.36 1.028.24.07.734.187 1.355.187 1.042 0 2.528-.324 3.685-1.867a.5.5 0 00.023-.567zM6.86 15.52a3.927 3.927 0 01-1.076.147 3.48 3.48 0 01-2.069-.654c.935-.179 1.556-.768 2.07-1.258.492-.468.815-.755 1.214-.755.551 0 1 .449 1 1 0 .611-.554 1.349-1.14 1.52zm4.355.147c-.497 0-.887-.092-1.076-.147-.586-.17-1.14-.909-1.14-1.52 0-.551.449-1 1-1 .4 0 .722.287 1.214.755.515.489 1.135 1.079 2.07 1.257a3.485 3.485 0 01-2.069.654z"
  })));
}
LiniTombstoneHipster.propTypes = {
  size: PropTypes.number.isRequired
};