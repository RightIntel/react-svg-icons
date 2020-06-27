function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
export default function LiniTrafficLights({
  size,
  ...props
}) {
  let className = 'Component Lini LiniTrafficLights';

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
    d: "M10 7c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zm0-3c-.551 0-1 .449-1 1s.449 1 1 1c.551 0 1-.449 1-1s-.449-1-1-1zM10 12c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zm0-3c-.551 0-1 .449-1 1s.449 1 1 1c.551 0 1-.449 1-1s-.449-1-1-1zM10 17c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zm0-3c-.551 0-1 .449-1 1s.449 1 1 1c.551 0 1-.449 1-1s-.449-1-1-1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.224 11.572C17.034 11.167 18 10.305 18 8.5a.5.5 0 00-.5-.5H15V6.954a4.208 4.208 0 001.224-.382C17.034 6.167 18 5.305 18 3.5a.5.5 0 00-.5-.5h-2.55a2.504 2.504 0 00-2.45-2h-5c-1.207 0-2.217.86-2.45 2H2.5a.5.5 0 00-.5.5c0 1.805.966 2.667 1.776 3.072.449.224.897.331 1.224.382V8H2.5a.5.5 0 00-.5.5c0 1.805.966 2.667 1.776 3.072.449.224.897.331 1.224.382V13H2.5a.5.5 0 00-.5.5c0 1.805.966 2.667 1.776 3.072.469.235.937.34 1.267.388A2.504 2.504 0 007.5 18.999h5c1.221 0 2.24-.88 2.457-2.039.33-.048.798-.154 1.267-.388.81-.405 1.776-1.267 1.776-3.072a.5.5 0 00-.5-.5H15v-1.046a4.208 4.208 0 001.224-.382zM4.196 5.664C3.538 5.325 3.149 4.767 3.035 4H5v1.939a3.105 3.105 0 01-.804-.275zm0 5C3.538 10.325 3.149 9.767 3.035 9H5v1.939a3.105 3.105 0 01-.804-.275zM3.035 14H5v1.939a3.105 3.105 0 01-.804-.275c-.658-.339-1.047-.897-1.161-1.664zM14 16.5c0 .827-.673 1.5-1.5 1.5h-5c-.827 0-1.5-.673-1.5-1.5v-13C6 2.673 6.673 2 7.5 2h5c.827 0 1.5.673 1.5 1.5v13zM16.965 9c-.114.767-.503 1.325-1.161 1.664a3.105 3.105 0 01-.804.275V9h1.965zm-1.161-3.336a3.105 3.105 0 01-.804.275V4h1.965c-.114.767-.503 1.325-1.161 1.664zM16.965 14c-.114.767-.503 1.325-1.161 1.664a3.105 3.105 0 01-.804.275V14h1.965z"
  })));
}
LiniTrafficLights.propTypes = {
  size: PropTypes.number.isRequired
};